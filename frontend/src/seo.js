import { services, vehicles } from './data.js'

/**
 * Single source of truth for everything search engines and social platforms read.
 * Used in three places:
 *   - main.js       -> applyMeta() updates the live document on every route change
 *   - entry-server  -> headTags() bakes the same tags into the prerendered HTML
 *   - prerender.mjs -> allRoutes() drives both prerendering and sitemap.xml
 */

export const SITE = {
  // Canonical host. The apex domain 308-redirects to www on Vercel, so www is canonical.
  url: 'https://www.krishscarservicecenter.com',
  name: "Krish's Car Service Center",
  locale: 'en_ZA',
  phone: '074 078 9555',
  phoneIntl: '+27740789555',
  email: 'krishcarservice@gmail.com',
  street: '17 Brass St',
  locality: 'Brackenfell',
  city: 'Cape Town',
  region: 'Western Cape',
  postalCode: '7550',
  country: 'ZA',
  logo: '/logo.png',
  // 1360x1020 workshop photo. A PNG fallback follows it for consumers that reject WebP.
  ogImage: '/images/IMG_20211218_200923.webp',
  ogImageFallback: '/logo.png',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=17+Brass+St+Brackenfell+Cape+Town+7550',
  areaServed: [
    'Brackenfell', 'Kraaifontein', 'Kuils River', 'Durbanville', 'Bellville',
    'Parow', 'Goodwood', 'Northern Suburbs', 'Cape Town'
  ]
}

const abs = (p) => (p.startsWith('http') ? p : SITE.url + p)

/** Trims on a word boundary so descriptions never get cut mid-word in the SERP. */
const clamp = (text, max) =>
  text.length <= max ? text : text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[,.]$/, '') + '…'

// Kept short enough that `clamp(lead, 96) + CTA` always lands under the ~160 char
// limit Google renders before truncating.
const CTA = 'Brackenfell, Cape Town. FREE quotes — call 074 078 9555.'

/** Google truncates titles around 60 chars; drop the wider locality before that bites. */
function fitTitle(subject, suffix = "| Krish's") {
  const full = `${subject} in Brackenfell, Cape Town ${suffix}`
  return full.length <= 60 ? full : `${subject} in Brackenfell ${suffix}`
}

/* ------------------------------------------------------------------ *
 * Structured data
 * ------------------------------------------------------------------ */

const BUSINESS_ID = SITE.url + '/#business'

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': BUSINESS_ID,
    name: SITE.name,
    alternateName: "Krish's Car Service Centre",
    description:
      'Mechanical repairs, spray painting, panel beating and auto electrical work on all makes and models in Brackenfell, Cape Town.',
    url: SITE.url + '/',
    logo: abs(SITE.logo),
    image: [abs(SITE.ogImage), abs('/images/SpecE46_IMAG2473.webp'), abs('/images/IMG_20211102_134419.webp')],
    telephone: SITE.phoneIntl,
    email: SITE.email,
    priceRange: 'R600 - R20000',
    currenciesAccepted: 'ZAR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country
    },
    hasMap: SITE.mapUrl,
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Workshop services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: SITE.url + '/service/' + s.slug
        }
      }))
    }
  }
}

function breadcrumbs(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path)
    }))
  }
}

/* ------------------------------------------------------------------ *
 * Per-route metadata
 * ------------------------------------------------------------------ */

const PAGES = {
  '/': {
    title: "Mechanic in Brackenfell, Cape Town | Krish's Car Service",
    description:
      'Trusted mechanic in Brackenfell, Cape Town. Servicing, engine rebuilds, panel beating, spray painting and auto electrical. FREE quotes — call 074 078 9555.'
  },
  '/services': {
    title: "Car Services & Repairs in Brackenfell | Krish's",
    description:
      'Car servicing, brakes, diagnostics, engine rebuilds, turbos, clutches, auto electrical, spray painting and panel beating in Brackenfell, Cape Town.'
  },
  '/gallery': {
    title: "Workshop Gallery | Krish's Car Service, Brackenfell",
    description:
      'Real photos from our Brackenfell workshop — engine rebuilds, timing belts, gearbox work and bodywork on Toyota, Ford, BMW, Mercedes and more.'
  },
  '/about': {
    title: "Why Choose Us | Krish's Car Service, Brackenfell",
    description:
      'Specialist engine work in Brackenfell, Cape Town. Mechanical repairs, panel beating, spray painting and auto electrical under one roof, with FREE quotes.'
  },
  '/contact': {
    title: "Book a Service or Get a Free Quote | Krish's",
    description:
      'Book your car in at 17 Brass St, Brackenfell, Cape Town. Send your booking by WhatsApp or email, or call 074 078 9555. Open Mon–Fri 8am–5pm, Sat 8am–1pm.'
  }
}

/**
 * Hand-written per service. Mechanically truncating longDescription produced copy
 * that got cut mid-sentence in the SERP, and unique descriptions earn better clicks.
 */
const SERVICE_DESCRIPTIONS = {
  'vehicle-service':
    'Full car service in Brackenfell, Cape Town — oil and filter change, fluid top-ups and a full safety inspection. From R850. FREE quotes: 074 078 9555.',
  'general-repair':
    'Brakes, suspension, steering, exhaust and general mechanical repairs in Brackenfell, Cape Town. From R600. FREE quotes — call 074 078 9555.',
  diagnostics:
    'FREE computer diagnostics in Brackenfell, Cape Town. We read fault codes and find the cause of engine, ABS and airbag warning lights. Call 074 078 9555.',
  'engine-rebuilding':
    'Engine rebuilds, cylinder head overhauls and timing belt replacement in Brackenfell, Cape Town. From R2,500. FREE quotes — call 074 078 9555.',
  'turbos-intercoolers':
    'Turbo repairs, reconditioning and intercooler servicing in Brackenfell, Cape Town. Boost leak testing from R1,500. FREE quotes — call 074 078 9555.',
  'injectors-pumps':
    'Fuel injector cleaning, testing and replacement plus diesel pump repairs in Brackenfell, Cape Town. From R500. FREE quotes — call 074 078 9555.',
  'clutch-replacement':
    'Clutch kit replacement, flywheel skimming and gearbox oil service in Brackenfell, Cape Town. From R2,500. FREE quotes — call 074 078 9555.',
  'auto-electrical':
    'Auto electrical repairs in Brackenfell, Cape Town — batteries, alternators, starter motors and wiring fault finding. From R300. Call 074 078 9555.',
  'spray-painting':
    'Full body resprays, panel painting and computerised colour matching in Brackenfell, Cape Town. From R1,500. FREE quotes — call 074 078 9555.',
  'panel-beating':
    'Panel beating in Brackenfell, Cape Town — dent removal, accident damage repair and rust treatment. From R800. FREE quotes — call 074 078 9555.'
}

/**
 * Returns { title, description, canonical, image, robots, jsonLd[] } for a path.
 * Unknown paths get a noindex 404 payload so stray URLs never enter the index.
 */
export function buildMeta(pathname) {
  const path = normalise(pathname)
  const page = PAGES[path]

  if (page) {
    const jsonLd = [businessSchema()]
    if (path !== '/') {
      jsonLd.push(
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: page.title.split('|')[0].trim(), path }
        ])
      )
    }
    return meta({ ...page, path, jsonLd })
  }

  const serviceSlug = path.startsWith('/service/') && path.slice('/service/'.length)
  const service = serviceSlug && services.find((s) => s.slug === serviceSlug)
  if (service) {
    return meta({
      path,
      title: fitTitle(service.name),
      description: SERVICE_DESCRIPTIONS[service.slug] || `${clamp(service.description, 96)} ${CTA}`,
      jsonLd: [
        businessSchema(),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          serviceType: service.name,
          description: service.longDescription,
          url: abs(path),
          provider: { '@id': BUSINESS_ID },
          areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${service.name} includes`,
            itemListElement: service.includes.map((item) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: item }
            }))
          }
        },
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path }
        ])
      ]
    })
  }

  const vehicleSlug = path.startsWith('/vehicle/') && path.slice('/vehicle/'.length)
  const vehicle = vehicleSlug && vehicles.find((v) => v.slug === vehicleSlug)
  if (vehicle) {
    const models = vehicle.models.slice(0, 4).join(', ')
    const lead = `${vehicle.name} servicing, repairs and diagnostics — ${models} and more.`
    return meta({
      path,
      title: `${vehicle.name} Service & Repairs in Brackenfell | Krish's`,
      description: `${clamp(lead, 96)} ${CTA}`,
      jsonLd: [
        businessSchema(),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `${vehicle.name} servicing and repairs`,
          serviceType: 'Auto repair',
          description: vehicle.description,
          url: abs(path),
          provider: { '@id': BUSINESS_ID },
          areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
          audience: { '@type': 'Audience', name: `${vehicle.name} owners` }
        },
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: vehicle.name, path }
        ])
      ]
    })
  }

  return meta({
    path,
    title: "Page Not Found | Krish's Car Service Center",
    description: "The page you're looking for doesn't exist. Browse our services or call 074 078 9555.",
    robots: 'noindex, follow',
    jsonLd: []
  })
}

function meta({ path, title, description, jsonLd = [], robots = 'index, follow' }) {
  const indexable = !robots.includes('noindex')
  return {
    path,
    title,
    description,
    robots,
    // No canonical on the 404 shell — it is served at arbitrary URLs, so any value
    // would either be a lie or point at a page that doesn't exist.
    canonical: indexable ? abs(path) : null,
    image: abs(SITE.ogImage),
    imageFallback: abs(SITE.ogImageFallback),
    jsonLd
  }
}

/** Strips query/hash and trailing slashes so `/about/?x=1` and `/about` share metadata. */
function normalise(pathname) {
  const path = String(pathname || '/').split('#')[0].split('?')[0]
  return path.length > 1 ? path.replace(/\/+$/, '') || '/' : '/'
}

/* ------------------------------------------------------------------ *
 * Route inventory (prerender + sitemap)
 * ------------------------------------------------------------------ */

export function allRoutes() {
  return [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
    { path: '/about', priority: '0.7', changefreq: 'yearly' },
    ...services.map((s) => ({ path: '/service/' + s.slug, priority: '0.8', changefreq: 'monthly' })),
    ...vehicles.map((v) => ({ path: '/vehicle/' + v.slug, priority: '0.8', changefreq: 'monthly' }))
  ]
}

/* ------------------------------------------------------------------ *
 * Emitters
 * ------------------------------------------------------------------ */

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Head markup for the prerendered HTML. Mirrors applyMeta() exactly. */
export function headTags(m) {
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    `<meta name="robots" content="${esc(m.robots)}">`,
    ...(m.canonical
      ? [
          `<link rel="canonical" href="${esc(m.canonical)}">`,
          `<meta property="og:url" content="${esc(m.canonical)}">`
        ]
      : []),
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(SITE.name)}">`,
    `<meta property="og:locale" content="${esc(SITE.locale)}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:image" content="${esc(m.image)}">`,
    `<meta property="og:image" content="${esc(m.imageFallback)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${esc(m.image)}">`,
    `<meta name="geo.region" content="ZA-WC">`,
    `<meta name="geo.placename" content="Brackenfell, Cape Town">`
  ]
  for (const block of m.jsonLd) {
    // `<` escaped so a stray sequence in the data can never close the script tag early.
    tags.push(
      `<script type="application/ld+json" data-seo>${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`
    )
  }
  // <title> is deliberately not marked: applyMeta() sweeps [data-seo] on every
  // navigation and drives the title through document.title instead.
  return tags.map((t) => t.replace(/^<(meta|link)/, '<$1 data-seo')).join('\n    ')
}

/** Applies the same metadata to a live document (client-side navigations). */
export function applyMeta(m) {
  if (typeof document === 'undefined') return

  // Clear the previous route's tags before writing this route's, so repeated
  // navigations can't accumulate duplicate descriptions or canonicals.
  document.querySelectorAll('head [data-seo]').forEach((el) => el.remove())
  document.title = m.title

  const head = document.head
  const add = (tag, attrs) => {
    const el = document.createElement(tag)
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
    el.setAttribute('data-seo', '')
    head.appendChild(el)
  }

  add('meta', { name: 'description', content: m.description })
  add('meta', { name: 'robots', content: m.robots })
  if (m.canonical) {
    add('link', { rel: 'canonical', href: m.canonical })
    add('meta', { property: 'og:url', content: m.canonical })
  }
  add('meta', { property: 'og:type', content: 'website' })
  add('meta', { property: 'og:site_name', content: SITE.name })
  add('meta', { property: 'og:locale', content: SITE.locale })
  add('meta', { property: 'og:title', content: m.title })
  add('meta', { property: 'og:description', content: m.description })
  add('meta', { property: 'og:image', content: m.image })
  add('meta', { property: 'og:image', content: m.imageFallback })
  add('meta', { name: 'twitter:card', content: 'summary_large_image' })
  add('meta', { name: 'twitter:title', content: m.title })
  add('meta', { name: 'twitter:description', content: m.description })
  add('meta', { name: 'twitter:image', content: m.image })
  add('meta', { name: 'geo.region', content: 'ZA-WC' })
  add('meta', { name: 'geo.placename', content: 'Brackenfell, Cape Town' })

  for (const block of m.jsonLd) {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-seo', '')
    el.textContent = JSON.stringify(block)
    head.appendChild(el)
  }
}
