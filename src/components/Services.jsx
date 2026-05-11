import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Building Management Systems',
    desc: 'Full BMS design, specification, and integration. We architect centralised control platforms that give operators real-time visibility and control across all mechanical and electrical systems.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
        <rect x="10" y="10" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2"/>
        <line x1="24" y1="10" x2="24" y2="19" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="29" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="24" x2="19" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="29" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'HVAC Controls Engineering',
    desc: 'Precision control logic for AHUs, FCUs, chillers, cooling towers, boilers, and VAV systems. Sequences engineered to optimise comfort, energy use, and equipment longevity.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36 L8 16 L24 8 L40 16 L40 36 L24 44 Z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 18 L24 12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M30 21 L35 18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M30 27 L35 30" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 30 L24 36" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 27 L13 30" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 21 L13 18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'DDC Panel Engineering',
    desc: 'Custom DDC panel design and fabrication — from schematic drawings through to I/O schedules, panel build, testing, and documentation. Built to specification, built to last.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="14" y1="8" x2="14" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="34" y1="8" x2="34" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="18" r="2" fill="currentColor"/>
        <circle cx="10" cy="26" r="2" fill="currentColor"/>
        <circle cx="10" cy="34" r="2" fill="currentColor"/>
        <line x1="14" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="14" y1="26" x2="34" y2="26" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="14" y1="34" x2="34" y2="34" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'BACnet & Modbus Integration',
    desc: 'Seamless protocol integration across disparate building systems. We configure, map, and validate BACnet IP/MSTP and Modbus RTU/TCP networks with full point list documentation.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="36" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="36" cy="36" r="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="18" y1="21" x2="30" y2="15" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="18" y1="27" x2="30" y2="33" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Energy Monitoring',
    desc: 'Sub-metering design, meter integration, and energy dashboards that expose consumption patterns, identify waste, and support compliance with energy reporting requirements.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="6,36 14,24 20,30 28,16 34,22 42,10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="10" x2="6" y2="40" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Smart Building Dashboards',
    desc: 'Web-based operator interfaces and analytics dashboards — configurable views, alarm management, trend logging, and remote access engineered for facility management teams.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="18" y1="34" x2="18" y2="42" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="34" x2="30" y2="42" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="42" x2="36" y2="42" stroke="currentColor" strokeWidth="2"/>
        <rect x="12" y="12" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="26" y="12" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="22" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '07',
    title: 'BMS Programming',
    desc: 'Controller programming across major platforms including Niagara Framework, EcoStruxure, OPUS, Trend IQ, and Distech ECB. Logic that runs correctly from day one.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 16 L16 12 L32 12 L32 16" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="30" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Commissioning & Testing',
    desc: 'Systematic pre-commissioning checks, functional performance testing, and handover documentation — ensuring every point is verified and every sequence is proven before practical completion.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6 L38 14 L38 30 L24 42 L10 30 L10 14 Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 14 L31 18 L31 26 L24 34 L17 26 L17 18 Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '09',
    title: 'Technical Support & Maintenance',
    desc: 'Ongoing BMS support, remote diagnostics, fault resolution, software updates, and preventive maintenance programs — keeping critical building systems operational around the clock.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16 L24 24 L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="2" fill="currentColor"/>
        <path d="M36 8 L40 4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8 L8 4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M38 24 L44 24" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">

        <motion.div
          className="section-header-centered"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag">What We Do</div>
          <h2 className="section-heading">Core Engineering Services</h2>
          <p className="section-intro">
            Comprehensive building automation capabilities delivered by engineers who understand both
            the field and the code.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map(svc => (
            <motion.div key={svc.num} className="service-card" variants={cardVariant}>
              <div className="service-num">{svc.num}</div>
              <motion.div
                className="service-icon"
                whileHover={{ scale: 1.18, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 340, damping: 14 }}
              >
                {svc.icon}
              </motion.div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
