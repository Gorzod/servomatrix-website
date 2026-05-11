import { motion } from 'framer-motion'

const sectors = [
  {
    icon: '🏢',
    title: 'Commercial Buildings',
    desc: 'Office towers, mixed-use developments, and commercial complexes requiring integrated HVAC, lighting, and energy management.',
  },
  {
    icon: '🏥',
    title: 'Hospitals & Healthcare',
    desc: 'Critical environment control — pressure relationships, air changes, temperature precision, and 24/7 alarm monitoring for clinical spaces.',
  },
  {
    icon: '🏨',
    title: 'Hotels & Hospitality',
    desc: 'Guest comfort systems, energy optimisation, room automation, and centralised facility management for hospitality properties.',
  },
  {
    icon: '🏭',
    title: 'Industrial Facilities',
    desc: 'Process monitoring, utility management, and robust control systems designed for the demands of industrial environments.',
  },
  {
    icon: '🔧',
    title: 'MEP Contractors',
    desc: 'Specialist BMS subcontract support — DDC engineering, programming, and commissioning as a delivery partner on MEP projects.',
  },
  {
    icon: '📐',
    title: 'Consultants & Developers',
    desc: 'Technical input at design stage — specifications, BMS briefs, protocol strategies, and peer review from an independent engineering perspective.',
  },
]

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Sectors() {
  return (
    <section className="sectors section" id="sectors">
      <div className="container">

        <motion.div
          className="section-header-centered"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag">Who We Serve</div>
          <h2 className="section-heading">Built for Demanding Environments</h2>
          <p className="section-intro">
            Servomatrix delivers across the full spectrum of building types where reliable automation
            is non-negotiable.
          </p>
        </motion.div>

        <motion.div
          className="sectors-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {sectors.map(sector => (
            <motion.div
              key={sector.title}
              className="sector-card"
              variants={cardVariant}
              whileHover={{
                y: -6,
                borderColor: 'rgba(0,212,180,0.28)',
                boxShadow: '0 20px 52px rgba(0,0,0,0.42)',
                transition: { duration: 0.22, ease: 'easeOut' },
              }}
            >
              <motion.span
                className="sector-icon"
                whileHover={{ scale: 1.2, rotate: -6 }}
                transition={{ type: 'spring', stiffness: 340, damping: 14 }}
              >
                {sector.icon}
              </motion.span>
              <h3>{sector.title}</h3>
              <p>{sector.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
