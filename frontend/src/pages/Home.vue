<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-container">
        <div class="hero-content">
          <h1>KRISH's Car Service Center</h1>
          <p class="hero-subtitle">Mechanic in Brackenfell, Cape Town</p>
          <p class="hero-address">17 Brass St, Brackenfell, Cape Town, 7550</p>
          <div class="hero-buttons">
            <a class="btn btn-primary" href="tel:0740789555">Call 074 078 9555</a>
            <router-link class="btn btn-outline" to="/contact">Book a Service</router-link>
            <a class="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=17+Brass+St+Brackenfell+Cape+Town+7550" target="_blank" rel="noopener">Get Directions</a>
          </div>
          <div class="hero-hours">
            <span>Mon–Fri: 8am–5pm</span>
            <span class="hero-hours-sep">|</span>
            <span>Sat: 8am–1pm</span>
            <span class="hero-hours-sep">|</span>
            <span>Sun: Closed</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Work</span>
          <h2>Workshop Gallery</h2>
          <p>Real photos from our workshop — engine rebuilds, timing belts, and more</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item" v-for="img in galleryPreview" :key="img.id">
            <img :src="img.src" :alt="img.title" loading="lazy" />
            <div class="gallery-overlay">
              <h4>{{ img.title }}</h4>
              <span>{{ img.category }}</span>
            </div>
          </div>
        </div>
        <div class="section-cta">
          <router-link class="btn btn-dark" to="/gallery">View All Photos</router-link>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Services</span>
          <h2>What We Do</h2>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in allServices" :key="service.id">
            <img :src="service.icon" :alt="service.name" class="service-icon" />
            <h3>{{ service.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <span class="section-label" style="color: rgba(255,255,255,0.5)">Why Choose Us</span>
          <h2>The KRISH's Difference</h2>
          <p>Engine rebuilds, timing belts, gearbox work and everything in between</p>
        </div>
        <div class="why-grid">
          <div class="why-item">
            <h3>Specialist Engine Work</h3>
            <p>From cylinder head rebuilds to full engine overhauls — we handle the jobs others turn away.</p>
          </div>
          <div class="why-item">
            <h3>All Makes & Models</h3>
            <p>Fiat, Ford, BMW, Mercedes, Jaguar, Toyota, Hyundai — European and Japanese vehicles welcome.</p>
          </div>
          <div class="why-item">
            <h3>Brackenfell Based</h3>
            <p>Conveniently located at 17 Brass St, Brackenfell. Easy to find, easy to reach.</p>
          </div>
          <div class="why-item">
            <h3>Call Anytime</h3>
            <p>Got a question or need a quote? Give us a call on 074 078 9555 during business hours.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="section section-gray">
      <div class="container">
        <div class="home-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.7!3d-33.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzEyLjAiUyAxOMKwNDInMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { services, gallery } from '../data.js'
export default {
  name: 'Home',
  computed: {
    galleryPreview() { return gallery.slice(0, 6) },
    allServices() { return services }
  }
}
</script>
