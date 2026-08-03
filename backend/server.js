const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Business info API
app.get('/api/info', (req, res) => {
  res.json({
    name: "KRISH's Car Service Center",
    address: "17 Brass St, Brackenfell, Cape Town, 7550",
    phone: "074 078 9555",
    email: "krishcarservice@gmail.com",
    rating: 4.7,
    reviewCount: 3,
    hours: {
      monday: { open: "08:00", close: "17:00" },
      tuesday: { open: "08:00", close: "17:00" },
      wednesday: { open: "08:00", close: "17:00" },
      thursday: { open: "08:00", close: "17:00" },
      friday: { open: "08:00", close: "17:00" },
      saturday: { open: "08:00", close: "13:00" },
      sunday: null
    }
  });
});

// Services API
app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      name: "General Car Service",
      description: "Complete vehicle inspection, oil change, filter replacement, and fluid top-ups to keep your car running smoothly.",
      icon: "wrench",
      price: "From R850"
    },
    {
      id: 2,
      name: "Brake Repairs",
      description: "Brake pad replacement, disc skimming, brake fluid flush, and full brake system diagnostics.",
      icon: "disc",
      price: "From R600"
    },
    {
      id: 3,
      name: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify engine faults, warning lights, and performance issues.",
      icon: "cpu",
      price: "From R350"
    },
    {
      id: 4,
      name: "Suspension & Steering",
      description: "Shock absorbers, control arms, wheel bearings, power steering repairs, and wheel alignment.",
      icon: "settings",
      price: "From R500"
    },
    {
      id: 5,
      name: "Auto Electrical",
      description: "Battery testing & replacement, alternator repairs, starter motor, and wiring diagnostics.",
      icon: "zap",
      price: "From R300"
    },
    {
      id: 6,
      name: "Clutch Replacement",
      description: "Clutch kit replacement, flywheel skimming, and gearbox oil service for manual vehicles.",
      icon: "cog",
      price: "From R2,500"
    },
    {
      id: 7,
      name: "Tyre Services",
      description: "Tyre fitting, balancing, rotation, puncture repair, and pressure checks.",
      icon: "circle",
      price: "From R100"
    },
    {
      id: 8,
      name: "Air Conditioning",
      description: "AC regas, leak detection, compressor repair, and full climate control servicing.",
      icon: "wind",
      price: "From R450"
    }
  ]);
});

// Reviews API
app.get('/api/reviews', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Johan van der Merwe",
      rating: 5,
      text: "Excellent service! Krish diagnosed my car's problem quickly and the repair was done same day. Very fair pricing too. Highly recommended!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Ayesha Petersen",
      rating: 5,
      text: "Best mechanic in Brackenfell. Honest, reliable and the work is always top quality. Won't take my car anywhere else.",
      date: "3 months ago"
    },
    {
      id: 3,
      name: "David Naidoo",
      rating: 4,
      text: "Good service overall. Had my brakes and suspension done here. Reasonable prices and they explain everything before doing the work.",
      date: "5 months ago"
    }
  ]);
});

// Gallery API
app.get('/api/gallery', (req, res) => {
  res.json([
    { id: 1, src: '/images/Fiat-500.webp', title: 'Fiat 500 Valve Train', category: 'Engine Work' },
    { id: 2, src: '/images/Fiat-500-timing-belt.webp', title: 'Fiat 500 Timing Belt', category: 'Timing Belts' },
    { id: 3, src: '/images/Fiat-500-Timing-crank-lock.webp', title: 'Fiat 500 Crank Lock Tool', category: 'Timing Belts' },
    { id: 4, src: '/images/Ford-Essex-v6-3.0.webp', title: 'Ford Essex V6 3.0 Engine Block', category: 'Engine Rebuilds' },
    { id: 5, src: '/images/JAGUAR-X-TYPE-V6-2.5-L-2001,-2002,-2003.webp', title: 'Jaguar X-Type V6 2.5L', category: 'Engine Work' },
    { id: 6, src: '/images/Mercedes-C270-CDI-engine-W203-c-class.webp', title: 'Mercedes C270 CDI Engine', category: 'Engine Rebuilds' },
    { id: 7, src: '/images/SpecE46_IMAG2473.webp', title: 'BMW E46 Engine on Stand', category: 'Engine Rebuilds' },
    { id: 8, src: '/images/hyundai-i20.webp', title: 'Hyundai i20 Camshaft Work', category: 'Engine Work' },
    { id: 9, src: '/images/IMG_20211102_134419.webp', title: 'Cylinder Head Gasket Replacement', category: 'Engine Work' },
    { id: 10, src: '/images/IMG_20211125_181824.webp', title: 'Engine Timing Chain Service', category: 'Engine Work' },
    { id: 11, src: '/images/IMG_20211125_181839.webp', title: 'Timing Chain Close-Up', category: 'Engine Work' },
    { id: 12, src: '/images/IMG_20210916_131106.webp', title: 'Crankshaft & Bearing Inspection', category: 'Engine Rebuilds' },
    { id: 13, src: '/images/IMG_20211011_150005.webp', title: 'Gearbox Rebuild', category: 'Gearbox & Clutch' },
    { id: 14, src: '/images/IMG_20211102_134425.webp', title: 'Engine Bay Strip-Down', category: 'Engine Work' },
    { id: 15, src: '/images/IMG_20211102_134648.webp', title: 'Engine Component Removal', category: 'Engine Work' },
    { id: 16, src: '/images/IMG_20211118_133619.webp', title: 'Under-Car Suspension Work', category: 'Repairs' },
    { id: 17, src: '/images/IMG_20211215_185327.webp', title: 'Front-End Suspension Repair', category: 'Repairs' },
    { id: 18, src: '/images/IMG_20211216_100308.webp', title: 'Headlight & Bumper Repair', category: 'Repairs' },
    { id: 19, src: '/images/IMG_20211218_200923.webp', title: 'Toyota Etios at the Workshop', category: 'Repairs' }
  ]);
});

// Contact form API
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Name, phone, and message are required.' });
  }

  console.log('New contact form submission:', { name, email, phone, message });

  res.json({ success: true, message: 'Thank you! We will get back to you shortly.' });
});

// Booking form API
app.post('/api/booking', (req, res) => {
  const { name, phone, email, service, date, vehicle, notes } = req.body;

  if (!name || !phone || !service || !date || !vehicle) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  console.log('New booking:', { name, phone, email, service, date, vehicle, notes });

  res.json({ success: true, message: 'Booking received! We will confirm your appointment shortly.' });
});

// Fallback. express.static above already serves the prerendered <route>/index.html
// files, so anything reaching here is a genuine miss — serve the noindex 404 shell
// with a 404 status rather than the homepage.
app.get('*', (req, res) => {
  const notFound = path.join(__dirname, '../frontend/dist/404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  res.status(404).sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`KRISH's Car Service backend running on http://localhost:${PORT}`);
});
