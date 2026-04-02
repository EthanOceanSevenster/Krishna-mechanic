<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>Workshop Gallery</h1>
        <p>Real photos from our workshop — engine rebuilds, timing belts, and more</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="gallery-filters">
          <button class="gallery-filter" :class="{ active: filter === 'All' }" @click="filter = 'All'">All</button>
          <button v-for="cat in categories" :key="cat" class="gallery-filter" :class="{ active: filter === cat }" @click="filter = cat">{{ cat }}</button>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item" v-for="(img, idx) in filtered" :key="img.id" @click="openLightbox(idx)">
            <img :src="img.src" :alt="img.title" loading="lazy" />
            <div class="gallery-overlay">
              <h4>{{ img.title }}</h4>
              <span>{{ img.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="lightbox" v-if="lightboxOpen" @click.self="lightboxOpen = false">
      <button class="lightbox-close" @click="lightboxOpen = false">&#10005;</button>
      <button class="lightbox-nav lightbox-prev" @click="prev">&#8249;</button>
      <img :src="filtered[lightboxIndex]?.src" :alt="filtered[lightboxIndex]?.title" />
      <button class="lightbox-nav lightbox-next" @click="next">&#8250;</button>
      <div class="lightbox-caption">
        <h4>{{ filtered[lightboxIndex]?.title }}</h4>
        <span>{{ filtered[lightboxIndex]?.category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gallery } from '../data.js'
export default {
  name: 'Gallery',
  data() {
    return { filter: 'All', lightboxOpen: false, lightboxIndex: 0 }
  },
  computed: {
    categories() { return [...new Set(gallery.map(g => g.category))] },
    filtered() { return this.filter === 'All' ? gallery : gallery.filter(g => g.category === this.filter) }
  },
  mounted() { window.addEventListener('keydown', this.onKey) },
  beforeUnmount() { window.removeEventListener('keydown', this.onKey) },
  methods: {
    onKey(e) {
      if (!this.lightboxOpen) return
      if (e.key === 'Escape') this.lightboxOpen = false
      if (e.key === 'ArrowLeft') this.prev()
      if (e.key === 'ArrowRight') this.next()
    },
    openLightbox(i) { this.lightboxIndex = i; this.lightboxOpen = true },
    prev() { this.lightboxIndex = (this.lightboxIndex - 1 + this.filtered.length) % this.filtered.length },
    next() { this.lightboxIndex = (this.lightboxIndex + 1) % this.filtered.length }
  }
}
</script>
