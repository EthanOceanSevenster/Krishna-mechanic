<template>
  <div id="krish-app">
    <!-- Navbar -->
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-container">
        <router-link class="nav-logo" to="/">
          <img src="/logo.avif" alt="KRISH's Car Service" class="logo-img" />
          KRISH's Auto
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/about">Why Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><a class="nav-cta" href="tel:0740789555">Call Now</a></li>
        </ul>
        <button class="mobile-toggle" @click="mobileOpen = !mobileOpen">
          {{ mobileOpen ? '✕' : '☰' }}
        </button>
      </div>
      <div class="mobile-menu" :class="{ open: mobileOpen }">
        <router-link to="/" @click="mobileOpen = false">Home</router-link>
        <router-link to="/gallery" @click="mobileOpen = false">Gallery</router-link>
        <router-link to="/services" @click="mobileOpen = false">Services</router-link>
        <router-link to="/about" @click="mobileOpen = false">Why Us</router-link>
        <router-link to="/contact" @click="mobileOpen = false">Contact</router-link>
        <a href="tel:0740789555">Call 074 078 9555</a>
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
            <a class="btn btn-primary" href="tel:0740789555" style="background:#fff;color:#111;">
              Call 074 078 9555
            </a>
          </div>
        </div>
      </div>
      <div class="footer-main">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col footer-brand">
              <img src="/logo.avif" alt="KRISH's" class="footer-logo" />
              <p>KRISH's Car Service Center</p>
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
          <p>&copy; {{ new Date().getFullYear() }} KRISH's Car Service Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { scrolled: false, mobileOpen: false }
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
