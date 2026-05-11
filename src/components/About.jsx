import { motion } from 'framer-motion'

const cards = [
  {
    icon: '◈',
    title: 'Protocol Expertise',
    desc: 'Native proficiency in BACnet IP/MSTP, Modbus RTU/TCP, LON, and KNX — no black-box integration, full transparency.',
  },
  {
    icon: '◈',
    title: 'End-to-End Delivery',
    desc: "From design and panel fabrication through to programming, commissioning, and long-term support — one engineering partner for the full lifecycle.",
  },
  {
    icon: '◈',
    title: 'Vendor-Neutral Approach',
    desc: "Honeywell, Siemens, Schneider Electric, Distech, Trend, and more — we specify what's right for the project, not what's convenient.",
  },
]

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function smoothScroll(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Left copy */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag">Who We Are</div>
            <h2 className="section-heading">Engineering Intelligence Into Every Building System</h2>
            <p>
              Servomatrix is a specialist building automation and controls engineering firm. We design,
              integrate, program, commission, and support the full spectrum of BMS infrastructure —
              from a single DDC controller to enterprise-wide smart building networks.
            </p>
            <p>
              Our engineers operate at the intersection of mechanical, electrical, and digital systems
              — bridging the gap between field devices and high-level building intelligence platforms.
            </p>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); smoothScroll('#contact') }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(0,212,180,0.32)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              Work With Us
            </motion.a>
          </motion.div>

          {/* Right cards — staggered */}
          <motion.div
            className="about-cards"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {cards.map(card => (
              <motion.div
                key={card.title}
                className="about-card"
                variants={cardVariant}
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(0,212,180,0.28)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
                  transition: { duration: 0.22, ease: 'easeOut' },
                }}
              >
                <div className="about-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
