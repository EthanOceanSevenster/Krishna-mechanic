<template>
  <div>
    <section class="page-header page-header-dark">
      <div class="container">
        <h1>Page Not Found</h1>
        <p>That page has moved or never existed. Here's where to go instead.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Popular Pages</span>
          <h2>Looking for something?</h2>
          <p>Browse our services or give us a call on <a href="tel:0740789555">074 078 9555</a></p>
        </div>
        <div class="services-grid">
          <router-link class="service-card service-card-link" to="/">
            <h3>Home</h3>
            <p>Mechanical repairs, spray painting, panel beating and auto electrical in Brackenfell.</p>
          </router-link>
          <router-link class="service-card service-card-link" to="/services">
            <h3>Our Services</h3>
            <p>The full list of what we do, from routine servicing to full engine rebuilds.</p>
          </router-link>
          <router-link class="service-card service-card-link" to="/gallery">
            <h3>Workshop Gallery</h3>
            <p>Real photos of engine rebuilds, timing belts and bodywork from our workshop.</p>
          </router-link>
          <router-link class="service-card service-card-link" to="/contact">
            <h3>Book a Service</h3>
            <p>Send us your booking by WhatsApp or email and we'll confirm your slot.</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: 'NotFound' }
</script>
