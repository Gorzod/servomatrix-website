import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const details = [
  { label: 'Email',         value: 'info@servomatrix.com' },
  { label: 'Response Time', value: 'Within 24 hours' },
  { label: 'Availability',  value: 'Mon – Fri, 08:00 – 18:00' },
]

const services = [
  'BMS Design & Integration',
  'HVAC Controls Engineering',
  'DDC Panel Engineering',
  'BACnet / Modbus Integration',
  'Energy Monitoring',
  'Smart Building Dashboard',
  'BMS Programming',
  'Commissioning & Testing',
  'Technical Support',
  'Other / Not Sure',
]

export default function Contact() {
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const name  = form.querySelector('#name').value.trim()
    const email = form.querySelector('#email').value.trim()
    const msg   = form.querySelector('#message').value.trim()

    if (!name || !email || !msg) {
      setStatus('error')
      setMessage('Please complete all required fields (marked with *).')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('sending')
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setMessage('Thank you — your enquiry has been received. We will respond within one business day.')
        form.reset()
      } else {
        throw new Error(json.message || 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Network error — please check your connection and try again.')
    }

    setTimeout(() => { setStatus('idle'); setMessage('') }, 8000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Left — info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag">Contact</div>
            <h2 className="section-heading">Let's Discuss Your Project</h2>
            <p>
              Send us a brief description of your project and we'll respond with a preliminary scope
              and approach within one business day.
            </p>
            <div className="contact-details">
              {details.map(d => (
                <div key={d.label} className="contact-detail">
                  <span className="contact-detail-label">{d.label}</span>
                  <span className="contact-detail-value">{d.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value="d794af6d-2621-4d79-b4e1-eb5897df58f6" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your company" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 000 000 0000" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Brief *</label>
                <textarea
                  id="message" name="message" rows="5"
                  placeholder="Describe your project, building type, current systems, and any specific requirements..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full submit-btn"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 0 28px rgba(0,212,180,0.32)' } : {}}
                whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                transition={{ type: 'spring', stiffness: 360, damping: 20 }}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    Sending…
                  </>
                ) : 'Send Enquiry'}
              </motion.button>

              <AnimatePresence mode="wait">
                {message && (
                  <motion.div
                    key={status}
                    className={`form-notice ${status === 'success' ? 'success' : 'error'}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'block' }}
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
