<template>
  <div v-if="service">
    <!-- Dark Hero Banner -->
    <div class="vehicle-hero">
      <div class="container">
        <span class="vehicle-hero-label">OUR SERVICES</span>
        <h1>{{ service.name }} in Brackenfell, Cape Town</h1>
        <p>{{ service.description }}</p>
        <div class="vehicle-hero-btns">
          <router-link class="btn btn-primary" to="/contact">Get A Free Quote</router-link>
          <a class="btn btn-outline" href="tel:0740789555">Call Now</a>
        </div>
      </div>
    </div>

    <!-- About This Service -->
    <section class="section">
      <div class="container">
        <div class="vehicle-about">
          <div class="vehicle-about-text">
            <h2>{{ service.name }}</h2>
            <p>{{ service.longDescription }}</p>
            <p class="vehicle-about-sub">We offer <strong>FREE quotes and diagnostics</strong> on all work. No hidden fees, no surprises — just honest, quality service at our Brackenfell workshop.</p>
          </div>
          <div class="vehicle-about-info">
            <div class="vehicle-info-card">
              <h4>Pricing</h4>
              <p class="service-page-price">{{ service.price }}</p>
              <h4>Free Quotes</h4>
              <p>We provide free assessments and quotes on all services. No obligation.</p>
              <h4>Workshop Location</h4>
              <p>17 Brass St, Brackenfell<br>Cape Town, 7550</p>
              <h4>Contact</h4>
              <p><a href="tel:0740789555">074 078 9555</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Images -->
    <section class="section" v-if="service.images && service.images.length">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Work</span>
          <h2>{{ service.name }} In Action</h2>
          <p>See the quality of our workmanship</p>
        </div>
        <div class="vehicle-images-grid">
          <div class="vehicle-image-card" v-for="(img, index) in service.images" :key="index">
            <img :src="img" :alt="service.name + ' at Krish\'s Car Service Center in Brackenfell, Cape Town'" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- What's Included -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What's Included</span>
          <h2>{{ service.name }} Includes</h2>
          <p>Everything covered under this service</p>
        </div>
        <div class="service-includes-grid">
          <div class="service-include-item" v-for="(item, index) in service.includes" :key="index">
            <span class="service-include-check">&#10003;</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Services -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">More Services</span>
          <h2>Other Services We Offer</h2>
          <p>Full range of mechanical, electrical, and body work</p>
        </div>
        <div class="services-grid">
          <router-link
            class="service-card service-card-link"
            v-for="s in otherServices"
            :key="s.id"
            :to="'/service/' + s.slug"
          >
            <h3>{{ s.name }}</h3>
            <p>{{ s.description }}</p>
            <span class="service-price">{{ s.price }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section-dark cta-banner">
      <div class="container">
        <div class="cta-content">
          <h2>Need {{ service.name }}?</h2>
          <p>Get a FREE quote today. Call us or send a WhatsApp — no obligation.</p>
          <div class="cta-buttons">
            <a class="btn btn-primary" href="tel:0740789555" style="background:#fff;color:var(--dark);">Call 074 078 9555</a>
            <a class="btn-whatsapp" href="https://wa.me/27740789555" target="_blank" rel="noopener">WhatsApp Us</a>
            <a class="btn-email" href="mailto:krishcarservice@gmail.com">Email Us</a>
            <router-link class="btn-outline-dark" to="/contact">Book Online</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <div class="page-header">
      <h1>Service Not Found</h1>
      <p>We couldn't find that service. <router-link to="/services" style="text-decoration:underline;">View all services</router-link></p>
    </div>
  </div>
</template>

<script>
import { services } from '../data.js'

export default {
  name: 'Service',
  computed: {
    service() {
      return services.find(s => s.slug === this.$route.params.slug)
    },
    otherServices() {
      return services.filter(s => s.id !== this.service?.id)
    }
  }
}
</script>
