import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Gallery from './pages/Gallery.vue'
import Services from './pages/Services.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Vehicle from './pages/Vehicle.vue'
import Service from './pages/Service.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/services', name: 'services', component: Services },
  { path: '/service/:slug', name: 'service', component: Service },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/vehicle/:slug', name: 'vehicle', component: Vehicle },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 120 }
    }
    return { top: 0 }
  }
})

export default router
