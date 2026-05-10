<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-badge">Brackenfell, Cape Town</span>
          <h1>Krish's Car Service Center</h1>
          <p class="hero-tagline">Mechanical Repairs &bull; Spray Painting &bull; Panel Beating &bull; Auto Electrical</p>
          <p class="hero-free-quote">FREE Quotes &amp; Diagnostics</p>
          <p class="hero-address">17 Brass St, Brackenfell, Cape Town, 7550</p>
          <div class="hero-buttons">
            <router-link class="btn btn-primary" to="/contact">Get A Free Quote</router-link>
            <a class="btn btn-primary" href="tel:0740789555">Call Now</a>
            <router-link class="btn btn-outline" to="/contact">Book a Service</router-link>
          </div>
          <div class="hero-hours">
            <span>Mon&#8211;Fri: 8am&#8211;5pm</span>
            <span class="hero-hours-sep">|</span>
            <span>Sat: 8am&#8211;1pm</span>
            <span class="hero-hours-sep">|</span>
            <span>Sun: Closed</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services Highlight -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Do</span>
          <h2>Complete Vehicle Care Under One Roof</h2>
          <p>From engine rebuilds to a fresh coat of paint &#8212; we handle it all</p>
        </div>
        <div class="core-grid">
          <div class="core-card">
            <div class="core-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3>Mechanical Repairs</h3>
            <p>Full servicing, engine rebuilds, gearbox work, clutch replacements, brakes, suspension, diagnostics and all general mechanical work.</p>
          </div>
          <div class="core-card">
            <div class="core-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Panel Beating</h3>
            <p>Accident damage repair, dent removal, panel straightening, bodywork restoration and structural repairs to get your car looking right again.</p>
          </div>
          <div class="core-card">
            <div class="core-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2l2 2-2 2"/><path d="M3 6h4"/><path d="M19 22l-2-2 2-2"/><path d="M17 18h4"/><circle cx="8.5" cy="8.5" r="2.5"/><circle cx="15.5" cy="15.5" r="2.5"/><path d="M21 3l-18 18"/></svg>
            </div>
            <h3>Spray Painting</h3>
            <p>Full body resprays, panel painting, professional colour matching, clear coat finishing, and scratch repair to factory standards.</p>
          </div>
          <div class="core-card">
            <div class="core-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3>Auto Electrical</h3>
            <p>Battery testing, alternator and starter motor repairs, wiring diagnostics, lighting, and full electrical fault finding.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Stats -->
    <section class="section section-dark">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">All</span>
            <span class="stat-label">Makes & Models</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4-in-1</span>
            <span class="stat-label">Workshop Services</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4.7</span>
            <span class="stat-label">Customer Rated</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Work</span>
          <h2>Workshop Gallery</h2>
          <p>Real photos from our workshop &#8212; engine rebuilds, bodywork, and more</p>
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

    <!-- All Services -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Services</span>
          <h2>Full Service List</h2>
          <p>Everything your vehicle needs in one place</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="service in allServices" :key="service.id">
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
            <span class="service-price">{{ service.price }}</span>
          </div>
        </div>
        <div class="section-cta">
          <router-link class="btn btn-dark" to="/contact">Get a Quote</router-link>
        </div>
      </div>
    </section>

    <!-- Why Us -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <span class="section-label" style="color: rgba(255,255,255,0.5)">Why Choose Us</span>
          <h2>The Krish's Difference</h2>
          <p>Mechanical, body, paint, and electrical &#8212; one workshop, no runaround</p>
        </div>
        <div class="why-grid">
          <div class="why-item">
            <div class="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3>One-Stop Workshop</h3>
            <p>No need to go between different shops. We handle mechanical repairs, panel beating, spray painting, and auto electrical all under one roof.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <h3>All Makes &amp; Models</h3>
            <p>Toyota, Ford, VW, BMW, Audi, Nissan, Hyundai &#8212; European, Japanese, and Korean vehicles. We work on everything.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <h3>Honest &amp; Transparent</h3>
            <p>No hidden costs. We explain the problem, give you an upfront quote, and only do the work you agree to. No surprises.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>FREE Quotes &amp; Diagnostics</h3>
            <p>We offer free assessments and computer diagnostics. Know exactly what's wrong before you spend a cent on repairs.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Conveniently Located</h3>
            <p>Easy to find at 17 Brass St, Brackenfell. Call us on 074 078 9555 for a quote or to book your vehicle in.</p>
          </div>
          <div class="why-item">
            <div class="why-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Quality Parts</h3>
            <p>We use quality OEM and aftermarket parts on every job. No shortcuts, no cheap substitutes &#8212; just proper workmanship.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section cta-banner">
      <div class="container">
        <div class="cta-content">
          <h2>Need Your Car Fixed, Painted, or Back on the Road?</h2>
          <p>Give us a call or book online &#8212; we'll sort it out.</p>
          <div class="cta-buttons">
            <a class="btn btn-primary" href="tel:0740789555">Call 074 078 9555</a>
            <a class="btn-whatsapp" href="https://wa.me/27740789555" target="_blank" rel="noopener">WhatsApp Us</a>
            <a class="btn-email" href="mailto:krishcarservice@gmail.com">Email Us</a>
            <router-link class="btn-outline-dark" to="/contact">Book Online</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="map-fullwidth">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.7!3d-33.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzEyLjAiUyAxOMKwNDInMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
