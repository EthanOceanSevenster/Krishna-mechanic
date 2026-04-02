<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>Our Services</h1>
        <p>From routine maintenance to major engine rebuilds</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <img :src="service.icon" :alt="service.name" class="service-icon" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <div class="section-cta" style="margin-top: 3rem">
          <router-link class="btn btn-dark" to="/contact">Book a Service</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { services } from '../data.js'
export default {
  name: 'Services',
  computed: { services() { return services } }
}
</script>
