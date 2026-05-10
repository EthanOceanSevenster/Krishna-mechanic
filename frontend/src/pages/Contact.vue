<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>Book a Service</h1>
        <p>Fill out the form and we'll confirm your appointment via WhatsApp</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-left">
            <h2>Get in Touch</h2>
            <p class="contact-desc">Fill out the form and we'll confirm your appointment. Or just give us a call.</p>
            <div class="contact-details">
              <a href="tel:0740789555" class="contact-detail-row">
                <strong>Phone</strong>
                <span>074 078 9555</span>
              </a>
              <a href="mailto:krishcarservice@gmail.com" class="contact-detail-row">
                <strong>Email</strong>
                <span>krishcarservice@gmail.com</span>
              </a>
              <div class="contact-detail-row">
                <strong>Address</strong>
                <span>17 Brass St, Brackenfell, Cape Town, 7550</span>
              </div>
              <div class="contact-detail-row">
                <strong>Hours</strong>
                <span>Mon–Fri 8am–5pm, Sat 8am–1pm</span>
              </div>
            </div>
          </div>
          <div class="form-card">
            <form @submit.prevent="submitBooking">
              <div class="form-row">
                <div class="form-group">
                  <label>Name *</label>
                  <input v-model="booking.name" type="text" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label>Surname *</label>
                  <input v-model="booking.surname" type="text" placeholder="Your surname" required />
                </div>
              </div>
              <div class="form-group">
                <label>Car *</label>
                <input v-model="booking.vehicle" type="text" placeholder="e.g. Toyota Corolla 2019" required />
              </div>
              <div class="form-group">
                <label>What's the issue? *</label>
                <textarea v-model="booking.issue" rows="3" placeholder="Describe what's wrong with your car..." required></textarea>
              </div>
              <div class="form-group">
                <label>Preferred Date *</label>
                <input v-model="booking.date" type="date" required />
              </div>
              <div class="form-buttons">
                <button type="submit" class="btn btn-submit">Send via WhatsApp</button>
                <button type="button" class="btn btn-email-submit" @click="submitEmail">Send via Email</button>
              </div>
              <p class="form-note">Choose WhatsApp or Email to send your booking details</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      booking: { name: '', surname: '', vehicle: '', issue: '', date: '' }
    }
  },
  methods: {
    buildMessage() {
      const b = this.booking
      const date = b.date ? new Date(b.date).toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not specified'
      return [
        `Hi KRISH's Car Service,`,
        ``,
        `Name: ${b.name} ${b.surname}`,
        `Car: ${b.vehicle}`,
        `Issue: ${b.issue}`,
        `Coming by: ${date}`,
        ``,
        `Please let me know if that works. Thanks!`
      ].join('\n')
    },
    submitBooking() {
      const msg = this.buildMessage()
      const url = `https://wa.me/27740789555?text=${encodeURIComponent(msg)}`
      window.open(url, '_blank')
    },
    submitEmail() {
      const b = this.booking
      if (!b.name || !b.surname || !b.vehicle || !b.issue || !b.date) {
        alert('Please fill in all fields before sending.')
        return
      }
      const subject = `Booking Request – ${b.vehicle}`
      const body = this.buildMessage()
      window.location.href = `mailto:krishcarservice@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
  }
}
</script>
