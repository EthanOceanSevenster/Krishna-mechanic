<template>
  <div v-if="vehicle">
    <!-- Dark Hero Banner -->
    <div class="vehicle-hero">
      <div class="container">
        <span class="vehicle-hero-label">YOUR VEHICLE</span>
        <h1>{{ vehicle.name }} Specialist</h1>
        <p>Expert {{ vehicle.name }} servicing, repairs &amp; maintenance in Brackenfell, Cape Town</p>
        <div class="vehicle-hero-btns">
          <router-link class="btn btn-primary" to="/contact">Get A Quote</router-link>
          <a class="btn btn-outline" href="tel:0740789555">Call Now</a>
        </div>
      </div>
    </div>

    <!-- About This Brand -->
    <section class="section">
      <div class="container">
        <div class="vehicle-about">
          <div class="vehicle-about-text">
            <h2>{{ vehicle.name }} Servicing &amp; Repairs</h2>
            <p>{{ vehicle.description }}</p>
            <p class="vehicle-about-sub">Whether you need a routine service, engine diagnostics, clutch replacement, or a full engine rebuild — our Brackenfell workshop is equipped to handle it all. We use quality parts and give your {{ vehicle.name }} the attention it deserves.</p>
          </div>
          <div class="vehicle-about-info">
            <div class="vehicle-info-card">
              <h4>Workshop Location</h4>
              <p>17 Brass St, Brackenfell<br>Cape Town, 7550</p>
              <h4>Hours</h4>
              <p>Mon–Fri: 8am–5pm<br>Sat: 8am–1pm</p>
              <h4>Contact</h4>
              <p><a href="tel:0740789555">074 078 9555</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vehicle Images -->
    <section class="section" v-if="vehicle.images && vehicle.images.length">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ vehicle.name }} Vehicles</span>
          <h2>{{ vehicle.name }} Models We Work On</h2>
          <p>From daily drivers to performance models — we service them all</p>
        </div>
        <div class="vehicle-images-grid">
          <div class="vehicle-image-card" v-for="(img, index) in vehicle.images" :key="index">
            <img :src="img" :alt="vehicle.name + ' vehicle'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Models -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Models We Service</span>
          <h2>{{ vehicle.name }} Models</h2>
          <p>We work on all {{ vehicle.name }} models — old and new</p>
        </div>
        <div class="model-tags">
          <span class="model-tag" v-for="model in vehicle.models" :key="model">
            {{ vehicle.name }} {{ model }}
          </span>
        </div>
      </div>
    </section>

    <!-- Services for this brand -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Offer</span>
          <h2>{{ vehicle.name }} Services</h2>
          <p>Full range of mechanical, electrical, and body work</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in allServices" :key="service.id">
            <img :src="service.icon" :alt="service.name" class="service-icon" loading="lazy" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
            <span class="service-price">{{ service.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section-dark cta-banner">
      <div class="container">
        <div class="cta-content">
          <h2>Need Your {{ vehicle.name }} Fixed?</h2>
          <p>Book your {{ vehicle.name }} in at our Brackenfell workshop. Call us or send a WhatsApp.</p>
          <div class="cta-buttons">
            <a class="btn btn-primary" href="tel:0740789555" style="background:#fff;color:var(--dark);">Call 074 078 9555</a>
            <a class="btn-whatsapp" href="https://wa.me/27740789555" target="_blank" rel="noopener">WhatsApp Us</a>
            <router-link class="btn-outline-dark" to="/contact">Book Online</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <div class="page-header">
      <h1>Vehicle Not Found</h1>
      <p>We couldn't find that vehicle brand. <router-link to="/" style="text-decoration:underline;">Go back home</router-link></p>
    </div>
  </div>
</template>

<script>
import { services, vehicles } from '../data.js'

export default {
  name: 'Vehicle',
  computed: {
    vehicle() {
      return vehicles.find(v => v.slug === this.$route.params.slug)
    },
    allServices() {
      return services
    }
  }
}
</script>
