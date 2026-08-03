<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>Car Services &amp; Repairs in Brackenfell, Cape Town</h1>
        <p>From routine maintenance to major engine rebuilds &#8212; all makes and models</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="services-grid">
          <router-link
            class="service-card service-card-link"
            v-for="service in services"
            :key="service.id"
            :id="'service-' + service.id"
            :to="'/service/' + service.slug"
          >
            <img :src="service.icon" :alt="service.name + ' at Krish\'s Car Service Center, Brackenfell'" class="service-icon" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
            <span class="service-price">{{ service.price }}</span>
          </router-link>
        </div>
        <div class="section-cta" style="margin-top: 3rem">
          <router-link class="btn btn-dark" to="/contact">Book a Service</router-link>
        </div>
      </div>
    </section>
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Your Vehicle</span>
          <h2>Brands We Service</h2>
          <p>Pick your make to see what we do for it</p>
        </div>
        <div class="model-tags">
          <router-link
            class="model-tag"
            v-for="v in vehicles"
            :key="v.id"
            :to="'/vehicle/' + v.slug"
          >{{ v.name }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { services, vehicles } from '../data.js'
export default {
  name: 'Services',
  computed: {
    services() { return services },
    vehicles() { return vehicles }
  }
}
</script>
