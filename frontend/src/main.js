import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router'
import { buildMeta, applyMeta } from './seo'
import './assets/style.css'

const el = document.getElementById('app')
const router = createAppRouter()

// Pages are prerendered at build time, so hydrate that markup instead of
// throwing it away. Falls back to a plain mount if the shell is empty.
const app = el.hasChildNodes() ? createSSRApp(App) : createApp(App)
app.use(router)

router.afterEach((to) => applyMeta(buildMeta(to.path)))

router.isReady().then(() => app.mount(el))
