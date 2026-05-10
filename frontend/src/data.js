export const services = [
  {
    id: 1, name: 'Vehicle Service', slug: 'vehicle-service',
    description: 'Complete vehicle inspection, oil change, filter replacement, and fluid top-ups to keep your car running smoothly.',
    longDescription: 'A full vehicle service is the foundation of keeping your car reliable, safe, and fuel-efficient. At Krish\'s Car Service Center, we perform a comprehensive bumper-to-bumper inspection every time your vehicle comes in. This includes engine oil and filter replacement, air filter and cabin filter checks, brake fluid, coolant, and power steering fluid top-ups, spark plug inspection, battery health check, and a thorough visual inspection of belts, hoses, and undercarriage components. We service all makes and models — petrol and diesel — and we use quality parts to keep your car running the way it should.',
    includes: ['Engine oil & filter change', 'Air filter & cabin filter check', 'Brake fluid top-up', 'Coolant & power steering fluid', 'Spark plug inspection', 'Battery health check', 'Belt & hose inspection', 'Tyre pressure & condition check', 'Full vehicle safety inspection'],
    price: 'From R850', icon: '/images/service-vehicle.png',
    images: ['/images/services/vehicle-service-1.jpg', '/images/services/vehicle-service-2.jpg']
  },
  {
    id: 2, name: 'General Repair & Maintenance', slug: 'general-repair',
    description: 'Brake repairs, suspension work, steering, exhaust, and all general mechanical repairs.',
    longDescription: 'From worn brake pads to leaking exhaust systems, our workshop handles all general mechanical repairs. We diagnose and fix issues with brakes, suspension, steering, wheel bearings, CV joints, exhaust systems, radiators, and more. Whether your car is making a strange noise, pulling to one side, or just doesn\'t feel right — bring it in. We\'ll find the problem and fix it properly the first time. We work on all makes and models, and we always explain what\'s wrong before we start any work.',
    includes: ['Brake pad & disc replacement', 'Suspension repairs & upgrades', 'Steering rack & pump repairs', 'Wheel bearing replacement', 'CV joint & driveshaft repairs', 'Exhaust repairs & replacement', 'Radiator repairs', 'Water pump replacement', 'General wear & tear items'],
    price: 'From R600', icon: '/images/service-repairs.png',
    images: ['/images/services/general-repair-1.jpg', '/images/services/general-repair-2.jpg']
  },
  {
    id: 3, name: 'Diagnostics & Fault Finding', slug: 'diagnostics',
    description: 'Advanced computer diagnostics to identify engine faults, warning lights, and performance issues.',
    longDescription: 'Modern vehicles rely on complex electronic systems, and when something goes wrong, a dashboard warning light is often the first sign. At Krish\'s, we use advanced OBD-II diagnostic equipment to read fault codes, identify the root cause of engine lights, ABS warnings, airbag faults, and performance issues. We don\'t just clear the codes — we investigate and fix the underlying problem. Our FREE diagnostic check means you\'ll know exactly what\'s wrong before spending a cent on repairs.',
    includes: ['OBD-II fault code reading', 'Engine management light diagnosis', 'ABS & traction control diagnostics', 'Airbag fault finding', 'Sensor testing & replacement', 'Live data monitoring', 'Performance issue diagnosis', 'Electrical fault tracing', 'FREE diagnostic assessment'],
    price: 'FREE Quote', icon: '/images/service-diagnostics.png',
    images: ['/images/services/diagnostics-1.jpg', '/images/services/diagnostics-2.jpg']
  },
  {
    id: 4, name: 'Engine Rebuilding or Replacement', slug: 'engine-rebuilding',
    description: 'Full engine rebuilds, cylinder head overhauls, timing belt and chain replacements.',
    longDescription: 'When your engine has serious internal damage — whether from overheating, oil starvation, or high mileage wear — a rebuild or replacement may be the most cost-effective solution. Our workshop specialises in complete engine rebuilds including cylinder head overhauls, piston and ring replacement, crankshaft machining, valve grinding, and timing belt or chain replacements. We also handle full engine swaps when a rebuild isn\'t viable. Every rebuild is done to manufacturer specifications using quality parts.',
    includes: ['Full engine strip-down & inspection', 'Cylinder head overhaul', 'Piston & ring replacement', 'Crankshaft machining', 'Valve grinding & seating', 'Timing belt & chain replacement', 'Gasket & seal replacement', 'Engine swap & replacement', 'Post-rebuild testing & tuning'],
    price: 'From R2,500', icon: '/images/service-engine.png',
    images: ['/images/services/engine-rebuilding-1.jpg', '/images/services/engine-rebuilding-2.jpg']
  },
  {
    id: 5, name: 'Turbos & Intercoolers', slug: 'turbos-intercoolers',
    description: 'Turbo repairs, replacements, intercooler servicing, and boost leak diagnostics.',
    longDescription: 'Turbochargers are precision components that operate under extreme heat and pressure. When they fail, you\'ll notice a loss of power, excessive smoke, or unusual whining noises. At Krish\'s, we diagnose and repair turbo issues including worn bearings, damaged compressor wheels, wastegate faults, and boost leaks. We also service and replace intercoolers, turbo oil feed lines, and associated piping. Whether your turbo needs a rebuild or a full replacement, we\'ll get your engine breathing properly again.',
    includes: ['Turbo diagnosis & testing', 'Turbo rebuild & reconditioning', 'Turbo replacement', 'Intercooler repair & replacement', 'Boost leak testing & repair', 'Wastegate adjustment & repair', 'Oil feed line replacement', 'Turbo actuator repair', 'Performance turbo upgrades'],
    price: 'From R1,500', icon: '/images/service-turbo.png',
    images: ['/images/services/turbos-1.jpg', '/images/services/turbos-2.jpg']
  },
  {
    id: 6, name: 'Injectors & Pumps', slug: 'injectors-pumps',
    description: 'Fuel injector cleaning, testing, replacement, and fuel pump diagnostics and repairs.',
    longDescription: 'Fuel injectors and pumps are critical to your engine\'s performance and fuel efficiency. Dirty, clogged, or faulty injectors cause rough idling, poor fuel economy, misfires, and loss of power. We offer professional injector cleaning, flow testing, and replacement for both petrol and diesel vehicles. We also diagnose and repair fuel pump issues including high-pressure pumps on common rail diesel systems. If your car is running rough or using too much fuel, your injectors may be the problem.',
    includes: ['Fuel injector cleaning & testing', 'Injector replacement', 'Fuel pump diagnosis & repair', 'High-pressure pump service (diesel)', 'Fuel rail pressure testing', 'Fuel filter replacement', 'Fuel line inspection', 'Common rail system diagnosis', 'Fuel economy optimisation'],
    price: 'From R500', icon: '/images/service-injectors.png',
    images: ['/images/services/injectors-1.jpg', '/images/services/injectors-2.jpg']
  },
  {
    id: 7, name: 'Clutch Replacement', slug: 'clutch-replacement',
    description: 'Clutch kit replacement, flywheel skimming, and gearbox oil service for manual vehicles.',
    longDescription: 'A slipping or worn clutch makes driving difficult and can cause further damage to your flywheel and gearbox if left too long. At Krish\'s, we replace clutch kits, resurface or replace dual-mass flywheels, and service gearbox oil on all manual transmission vehicles. We also handle hydraulic clutch systems including master and slave cylinder replacement. If your clutch is slipping, grabbing, or making noise, bring it in for an assessment — we\'ll give you an honest quote before starting any work.',
    includes: ['Clutch kit replacement', 'Flywheel skimming & replacement', 'Dual-mass flywheel service', 'Clutch master cylinder replacement', 'Clutch slave cylinder replacement', 'Gearbox oil service', 'Release bearing replacement', 'Clutch cable adjustment', 'Gearbox mount replacement'],
    price: 'From R2,500', icon: '/images/service-clutch.png',
    images: ['/images/services/clutch-1.jpg', '/images/services/clutch-2.jpg']
  },
  {
    id: 8, name: 'Auto Electrical', slug: 'auto-electrical',
    description: 'Battery testing & replacement, alternator repairs, starter motor, and wiring diagnostics.',
    longDescription: 'Electrical faults can be some of the most frustrating problems to deal with. From a car that won\'t start to flickering lights and intermittent faults, our auto electrical service covers it all. We test and replace batteries, repair and replace alternators and starter motors, diagnose wiring faults, and fix issues with central locking, electric windows, and lighting systems. Our diagnostic equipment helps us trace faults quickly and accurately so you\'re not paying for guesswork.',
    includes: ['Battery testing & replacement', 'Alternator repair & replacement', 'Starter motor repair & replacement', 'Wiring fault diagnosis', 'Central locking repairs', 'Electric window repairs', 'Lighting & indicator repairs', 'Fuse box diagnosis', 'ECU & relay diagnosis'],
    price: 'From R300', icon: '/images/service-performance.png',
    images: ['/images/services/electrical-1.jpg', '/images/services/electrical-2.jpg']
  },
  {
    id: 9, name: 'Spray Painting', slug: 'spray-painting',
    description: 'Full body respray, panel painting, colour matching, and professional paint finishing.',
    longDescription: 'Whether you need a single panel touched up after a fender bender or a complete body respray, our spray painting service delivers a factory-quality finish. We use professional spray equipment and high-quality automotive paint with computerised colour matching to ensure a perfect blend with your existing paintwork. We handle everything from minor scratch repairs and stone chip touch-ups to full vehicle resprays. All prep work — sanding, priming, masking — is done properly to ensure a lasting, professional result.',
    includes: ['Full body respray', 'Single panel painting', 'Computerised colour matching', 'Scratch & stone chip repair', 'Primer & base coat application', 'Clear coat finishing', 'Paint correction & buffing', 'Bumper painting', 'Mirror & trim painting'],
    price: 'From R1,500', icon: '/images/service-vehicle.png',
    images: ['/images/services/spray-painting-1.jpg', '/images/services/spray-painting-2.jpg']
  },
  {
    id: 10, name: 'Panel Beating', slug: 'panel-beating',
    description: 'Dent removal, panel repair, accident damage restoration, and bodywork straightening.',
    longDescription: 'Accident damage, dents, and bent panels don\'t just look bad — they can affect your vehicle\'s structural integrity and resale value. Our panel beating service covers everything from minor dent removal to full accident damage restoration. We straighten panels, replace damaged body parts, repair rust damage, and restore your vehicle\'s body to its original shape. Combined with our spray painting service, we deliver a complete body repair solution that gets your car looking like new again.',
    includes: ['Dent removal & repair', 'Panel straightening', 'Accident damage restoration', 'Structural repair', 'Rust repair & treatment', 'Body filler & finishing', 'Bumper repair & replacement', 'Door & fender replacement', 'Insurance claim repairs'],
    price: 'From R800', icon: '/images/service-repairs.png',
    images: ['/images/services/panel-beating-1.jpg', '/images/services/panel-beating-2.jpg']
  }
]

export const vehicles = [
  {
    id: 1, name: 'Toyota', slug: 'toyota',
    description: 'We service and repair all Toyota models — from the Corolla and Hilux to the Fortuner and Land Cruiser. Whether it\'s a routine service, engine rebuild, or clutch replacement, we know Toyota vehicles inside and out.',
    models: ['Corolla', 'Hilux', 'Fortuner', 'RAV4', 'Land Cruiser', 'Etios', 'Yaris', 'Starlet', 'Hiace', 'Avanza'],
    images: ['/images/vehicles/toyota-1.jpg', '/images/vehicles/toyota-2.jpg']
  },
  {
    id: 2, name: 'Ford', slug: 'ford',
    description: 'From the Ranger and Everest to the EcoSport and Fiesta, we handle all Ford servicing, repairs, engine work, and diagnostics. Our team has extensive experience with Ford\'s petrol and diesel engines.',
    models: ['Ranger', 'Everest', 'EcoSport', 'Fiesta', 'Focus', 'Figo', 'Mustang', 'Territory', 'Transit'],
    images: ['/images/vehicles/ford-1.jpg', '/images/vehicles/ford-2.jpg']
  },
  {
    id: 3, name: 'Volkswagen', slug: 'vw',
    description: 'VW vehicles are some of the most popular on South African roads. We service all Volkswagen models including the Polo, Golf, Tiguan, and Amarok — covering everything from basic services to full engine rebuilds.',
    models: ['Polo', 'Golf', 'Tiguan', 'T-Cross', 'Amarok', 'Caddy', 'Touareg', 'T-Roc', 'Polo Vivo'],
    images: ['/images/vehicles/vw-1.jpg', '/images/vehicles/vw-2.jpg']
  },
  {
    id: 4, name: 'BMW', slug: 'bmw',
    description: 'We provide specialist servicing and repairs for all BMW models. From the 1 Series to the X5, our workshop handles engine rebuilds, diagnostics, suspension work, and everything in between.',
    models: ['1 Series', '2 Series', '3 Series', '5 Series', 'X1', 'X3', 'X5', 'M3', 'M4'],
    images: ['/images/vehicles/bmw-1.jpg', '/images/vehicles/bmw-2.jpg']
  },
  {
    id: 5, name: 'Audi', slug: 'audi',
    description: 'Our workshop is fully equipped to service and repair Audi vehicles. Whether it\'s an A3, A4, Q5, or any other model, we handle everything from scheduled maintenance to complex engine and turbo repairs.',
    models: ['A1', 'A3', 'A4', 'A5', 'Q2', 'Q3', 'Q5', 'Q7', 'TT'],
    images: ['/images/vehicles/audi-1.jpg', '/images/vehicles/audi-2.jpg']
  },
  {
    id: 6, name: 'Nissan', slug: 'nissan',
    description: 'From the NP200 and NP300 to the Qashqai and X-Trail, we service all Nissan models. Our team is experienced with Nissan\'s petrol and diesel engines, including turbo and injector work.',
    models: ['NP200', 'NP300', 'Navara', 'Qashqai', 'X-Trail', 'Almera', 'Micra', 'Patrol', 'Magnite'],
    images: ['/images/vehicles/nissan-1.jpg', '/images/vehicles/nissan-2.jpg']
  },
  {
    id: 7, name: 'Mazda', slug: 'mazda',
    description: 'We service and repair all Mazda models — from the Mazda2 and CX-3 to the BT-50 bakkie. Our workshop handles general servicing, engine work, clutch replacements, and diagnostics.',
    models: ['Mazda2', 'Mazda3', 'CX-3', 'CX-5', 'CX-30', 'BT-50', 'MX-5'],
    images: ['/images/vehicles/mazda-1.jpg', '/images/vehicles/mazda-2.jpg']
  },
  {
    id: 8, name: 'Hyundai', slug: 'hyundai',
    description: 'Hyundai vehicles are reliable and popular in South Africa. We service all models including the i10, i20, Tucson, and Creta — covering everything from routine maintenance to engine and gearbox repairs.',
    models: ['i10', 'i20', 'i30', 'Tucson', 'Creta', 'Venue', 'Grand Creta', 'Kona', 'Santa Fe'],
    images: ['/images/vehicles/hyundai-1.jpg', '/images/vehicles/hyundai-2.jpg']
  },
  {
    id: 9, name: 'Isuzu', slug: 'isuzu',
    description: 'We specialise in Isuzu bakkies and SUVs including the D-Max, KB, and MU-X. From diesel engine servicing to turbo and injector repairs, we keep your Isuzu running strong.',
    models: ['D-Max', 'KB', 'MU-X', 'D-Max X-Rider', 'D-Max V-Cross'],
    images: ['/images/vehicles/isuzu-1.jpg', '/images/vehicles/isuzu-2.jpg']
  },
  {
    id: 10, name: 'Mitsubishi', slug: 'mitsubishi',
    description: 'Our workshop services all Mitsubishi models including the Triton, Pajero, ASX, and Outlander. We handle everything from scheduled services to full engine rebuilds and turbo work.',
    models: ['Triton', 'Pajero', 'Pajero Sport', 'ASX', 'Outlander', 'Eclipse Cross', 'Xpander'],
    images: ['/images/vehicles/mitsubishi-1.jpg', '/images/vehicles/mitsubishi-2.jpg']
  }
]

export const gallery = [
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
]
