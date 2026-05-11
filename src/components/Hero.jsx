import { motion } from 'framer-motion'
import BMSDiagram from './BMSDiagram'

const headingLines = [
  { text: 'Intelligent Buildings.', accent: false },
  { text: 'Absolute Control.',      accent: true  },
]

const lineVariants = {
  hidden:  { y: '110%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.72, delay: 0.35 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeUp = (delay) => ({
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

function smoothScroll(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

      <div className="hero-inner">
        <div className="hero-content">

          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="badge-dot"
              animate={{ opacity: [1, 0.35, 1], scale: [1, 0.65, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Building Automation &amp; Controls Engineering
          </motion.div>

          {/* Heading — each line clip-reveals upward */}
          <h1 className="hero-heading">
            {headingLines.map(({ text, accent }, i) => (
              <span
                key={text}
                className={`hero-heading-line${accent ? ' accent' : ''}`}
              >
                <motion.span
                  style={{ display: 'block' }}
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p className="hero-sub" {...fadeUp(1.05)}>
            Servomatrix engineers the systems that make buildings intelligent — from DDC panel
            fabrication and BACnet integration to full BMS programming, commissioning, and energy
            monitoring.
          </motion.p>

          {/* CTA buttons */}
          <motion.div className="hero-actions" {...fadeUp(1.22)}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); smoothScroll('#contact') }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(0,212,180,0.35)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              Request a Consultation
            </motion.a>
            <motion.a
              href="#services"
              className="btn btn-ghost"
              onClick={e => { e.preventDefault(); smoothScroll('#services') }}
              whileHover={{ scale: 1.04, borderColor: 'var(--cyan)', color: 'var(--cyan)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" {...fadeUp(1.38)}>
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years Engineering</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">BACnet</span>
              <span className="stat-label">&amp; Modbus Certified</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Technical Support</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated BMS diagram — right side */}
      <div className="hero-visual">
        <BMSDiagram />
      </div>
    </section>
  )
}
