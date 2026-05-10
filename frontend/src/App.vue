<template>
  <div id="krish-app">
    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-container">
        <router-link class="nav-logo" to="/">
          <img :src="logoUrl" alt="" class="logo-img" />
          Krish's Car Service Center
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li class="nav-dropdown">
            <button class="nav-dropdown-trigger">
              Services <span class="dropdown-arrow">&#9662;</span>
            </button>
            <div class="dropdown-menu">
              <div class="dropdown-column">
                <router-link
                  v-for="s in servicesList"
                  :key="s.id"
                  :to="'/service/' + s.slug"
                  class="dropdown-item"
                >{{ s.name }}</router-link>
              </div>
            </div>
          </li>
          <li class="nav-dropdown">
            <button class="nav-dropdown-trigger">
              Your Vehicle <span class="dropdown-arrow">&#9662;</span>
            </button>
            <div class="dropdown-menu dropdown-two-col">
              <div class="dropdown-column">
                <router-link
                  v-for="v in vehiclesList"
                  :key="v.id"
                  :to="'/vehicle/' + v.slug"
                  class="dropdown-item"
                >{{ v.name }}</router-link>
              </div>
            </div>
          </li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/about">Why Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <div class="nav-ctas">
          <a class="nav-cta nav-cta-primary" href="tel:0740789555">Call Us</a>
          <a class="nav-cta nav-cta-outline" href="mailto:krishcarservice@gmail.com">Email Us</a>
        </div>
        <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">
          {{ mobileOpen ? '\u2715' : '\u2630' }}
        </button>
      </div>
      <div class="nav-tagline">
        MECHANICAL REPAIRS &bull; SPRAY PAINTING &bull; PANEL BEATING &bull; AUTO ELECTRICAL
      </div>
      <div class="mobile-menu" :class="{ open: mobileOpen }">
        <router-link to="/" @click="mobileOpen = false">Home</router-link>
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="mobileServicesOpen = !mobileServicesOpen">
            Services
            <span class="mobile-arrow" :class="{ rotated: mobileServicesOpen }">&#9662;</span>
          </button>
          <div class="mobile-dropdown-items" v-show="mobileServicesOpen">
            <router-link
              v-for="s in servicesList"
              :key="s.id"
              :to="'/service/' + s.slug"
              class="mobile-sub-link"
              @click="mobileOpen = false; mobileServicesOpen = false"
            >{{ s.name }}</router-link>
          </div>
        </div>
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" @click="mobileVehiclesOpen = !mobileVehiclesOpen">
            Your Vehicle
            <span class="mobile-arrow" :class="{ rotated: mobileVehiclesOpen }">&#9662;</span>
          </button>
          <div class="mobile-dropdown-items" v-show="mobileVehiclesOpen">
            <router-link
              v-for="v in vehiclesList"
              :key="v.id"
              :to="'/vehicle/' + v.slug"
              class="mobile-sub-link"
              @click="mobileOpen = false; mobileVehiclesOpen = false"
            >{{ v.name }}</router-link>
          </div>
        </div>
        <router-link to="/gallery" @click="mobileOpen = false">Gallery</router-link>
        <router-link to="/about" @click="mobileOpen = false">Why Us</router-link>
        <router-link to="/contact" @click="mobileOpen = false">Contact</router-link>
        <a class="mobile-cta" href="tel:0740789555">Call 074 078 9555</a>
        <a class="mobile-cta mobile-cta-secondary" href="mailto:krishcarservice@gmail.com">Email Us</a>
      </div>
    </nav>

    <!-- Page Content -->
    <router-view />

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-cta">
            <div>
              <h2>Need your car fixed?</h2>
              <p>Give us a call or book online — we'll sort it out.</p>
            </div>
            <a class="btn btn-primary" href="tel:0740789555">
              Call 074 078 9555
            </a>
          </div>
        </div>
      </div>
      <div class="footer-main">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col footer-brand">
              <img :src="logoUrl" alt="Krish's" class="footer-logo" style="filter: brightness(0) invert(1);" />
              <p>Krish's Car Service Center</p>
            </div>
            <div class="footer-col">
              <h4>Location</h4>
              <p>17 Brass St<br>Brackenfell<br>Cape Town, 7550</p>
              <a href="https://www.google.com/maps/search/?api=1&query=17+Brass+St+Brackenfell+Cape+Town+7550" target="_blank" rel="noopener" class="footer-link">Get Directions &rarr;</a>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <p><a href="tel:0740789555">074 078 9555</a></p>
              <p><a href="mailto:krishcarservice@gmail.com">krishcarservice@gmail.com</a></p>
            </div>
            <div class="footer-col">
              <h4>Hours</h4>
              <p>Mon – Fri: 8am – 5pm</p>
              <p>Saturday: 8am – 1pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; {{ new Date().getFullYear() }} Krish's Car Service Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import logoImg from './assets/logo.png'
import { services, vehicles } from './data.js'

export default {
  name: 'App',
  data() {
    return {
      scrolled: false,
      mobileOpen: false,
      mobileServicesOpen: false,
      mobileVehiclesOpen: false,
      logoUrl: logoImg
    }
  },
  computed: {
    servicesList() { return services },
    vehiclesList() { return vehicles }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50
    }
  }
}
</script>
