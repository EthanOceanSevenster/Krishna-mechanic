import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Gallery from './pages/Gallery.vue'
import Services from './pages/Services.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/services', name: 'services', component: Services },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
