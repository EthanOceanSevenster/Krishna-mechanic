/**
 * Post-build step: turns the Vue SPA into static HTML.
 *
 * `vite build`      -> dist/            (client bundle + index.html template)
 * `vite build --ssr`-> dist-ssr/        (server render of the same components)
 * this script       -> dist/<route>/index.html for every route, plus sitemap.xml
 *
 * Crawlers and link unfurlers then get real content and real <head> tags without
 * having to execute JavaScript. The SPA still hydrates and takes over on load.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')

// pathToFileURL, not a bare path — Windows absolute paths are not valid ESM specifiers.
const { render, buildMeta, headTags, allRoutes, SITE } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.mjs')).href
)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
for (const marker of ['<!--seo-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) {
    throw new Error(`index.html is missing the ${marker} placeholder — prerendering cannot run.`)
  }
}

const routes = allRoutes()
const buildDate = new Date().toISOString().slice(0, 10)
const warnings = []
const seenTitles = new Map()

for (const { path: route } of routes) {
  const appHtml = await render(route)
  const meta = buildMeta(route)

  // Copy drifts as data.js grows; surface it at build time rather than in Search Console.
  if (meta.title.length > 60) warnings.push(`${route}: title is ${meta.title.length} chars (>60)`)
  if (meta.description.length > 160) {
    warnings.push(`${route}: description is ${meta.description.length} chars (>160)`)
  }
  if (seenTitles.has(meta.title)) {
    warnings.push(`${route}: duplicate title, same as ${seenTitles.get(meta.title)}`)
  }
  seenTitles.set(meta.title, route)

  const html = template
    .replace('<!--seo-head-->', headTags(meta))
    .replace('<!--app-html-->', appHtml)

  // "/" -> dist/index.html, "/service/x" -> dist/service/x/index.html
  const outFile =
    route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html')

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  console.log(`  prerendered ${route}`)
}

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(({ path: route, priority, changefreq }) =>
      [
        '  <url>',
        `    <loc>${SITE.url}${route === '/' ? '/' : route}</loc>`,
        `    <lastmod>${buildDate}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>'
      ].join('\n')
    )
    .join('\n') +
  `\n</urlset>\n`

fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

// The SPA fallback Vercel serves for unmatched URLs must not be indexable, and it
// must not claim to be the homepage. dist/index.html is the real homepage, so keep
// a separate noindex shell for genuine 404s.
fs.writeFileSync(
  path.join(dist, '404.html'),
  template
    .replace('<!--seo-head-->', headTags(buildMeta('/__not-found__')))
    .replace('<!--app-html-->', await render('/__not-found__'))
)

console.log(`\nPrerendered ${routes.length} routes + sitemap.xml + 404.html`)

if (warnings.length) {
  console.warn('\nSEO warnings:')
  for (const w of warnings) console.warn(`  ! ${w}`)
}
