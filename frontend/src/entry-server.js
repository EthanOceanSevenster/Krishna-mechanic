import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import App from './App.vue'
import { createAppRouter } from './router'

export { buildMeta, headTags, allRoutes, SITE } from './seo'

/** Renders one route to a static HTML string for prerender.mjs. */
export async function render(url) {
  const app = createSSRApp(App)
  const router = createAppRouter(createMemoryHistory())
  app.use(router)

  await router.push(url)
  await router.isReady()

  return renderToString(app)
}
