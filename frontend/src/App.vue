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
                <router-link to="/services" class="dropdown-item dropdown-item-all">All Services</router-link>
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
              to="/services"
              class="mobile-sub-link"
              @click="mobileOpen = false; mobileServicesOpen = false"
            >All Services</router-link>
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
              <p>17 Brass Street<br>Brackenfell<br>Cape Town, 7550</p>
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

    <!-- Floating WhatsApp contact -->
    <a
      class="whatsapp-fab"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener"
      aria-label="Message Krish's Car Service Center on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-fab-label">WhatsApp us</span>
    </a>
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
    vehiclesList() { return vehicles },
    whatsappUrl() {
      const msg = "Hi Krish's Car Service, I'd like to ask about "
      return 'https://wa.me/27740789555?text=' + encodeURIComponent(msg)
    }
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
