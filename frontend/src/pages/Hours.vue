<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>Hours & Location</h1>
        <p>17 Brass St, Brackenfell, Cape Town, 7550</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="hours-map-grid">
          <div class="hours-side">
            <ul class="hours-list">
              <li><span class="day">Monday</span><span class="time">8:00 AM – 5:00 PM</span></li>
              <li><span class="day">Tuesday</span><span class="time">8:00 AM – 5:00 PM</span></li>
              <li><span class="day">Wednesday</span><span class="time">8:00 AM – 5:00 PM</span></li>
              <li><span class="day">Thursday</span><span class="time">8:00 AM – 5:00 PM</span></li>
              <li><span class="day">Friday</span><span class="time">8:00 AM – 5:00 PM</span></li>
              <li><span class="day">Saturday</span><span class="time">8:00 AM – 1:00 PM</span></li>
              <li><span class="day">Sunday</span><span class="closed">Closed</span></li>
            </ul>
            <div class="hours-address">
              <p><strong>17 Brass St, Brackenfell, Cape Town, 7550</strong></p>
              <p><a href="tel:0740789555">074 078 9555</a></p>
              <a class="hours-directions" href="https://www.google.com/maps/search/?api=1&query=17+Brass+St+Brackenfell+Cape+Town+7550" target="_blank" rel="noopener">Get Directions &rarr;</a>
            </div>
          </div>
          <div class="map-side">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.7!3d-33.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzEyLjAiUyAxOMKwNDInMDAuMCJF!5e0!3m2!1sen!2sza!4v1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: 'Hours' }
</script>
