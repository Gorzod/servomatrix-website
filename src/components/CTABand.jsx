import { motion } from 'framer-motion'

function smoothScroll(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container">
        <motion.div
          className="cta-band-inner"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-band-text">
            <h2>Ready to Automate Your Building?</h2>
            <p>
              Whether you need a full BMS delivery, protocol integration, or specialist commissioning
              support — Servomatrix has the engineering depth to deliver.
            </p>
          </div>

          <motion.a
            href="#contact"
            className="btn btn-primary btn-large"
            onClick={e => { e.preventDefault(); smoothScroll('#contact') }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 36px rgba(0,212,180,0.42)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 360, damping: 20 }}
          >
            Start the Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
