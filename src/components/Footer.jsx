import { motion } from 'framer-motion'

const serviceLinks = [
  'BMS Integration', 'HVAC Controls', 'DDC Engineering', 'BACnet & Modbus', 'Energy Monitoring',
]
const companyLinks = [
  { label: 'About',       href: '#about'    },
  { label: 'Sectors',     href: '#sectors'  },
  { label: 'Our Process', href: '#process'  },
  { label: 'Contact',     href: '#contact'  },
]
const protocolLinks = ['BACnet IP', 'BACnet MSTP', 'Modbus RTU', 'Modbus TCP', 'LON / KNX']

function smoothScroll(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <a href="#home" onClick={e => { e.preventDefault(); smoothScroll('#home') }} className="nav-logo">
              <img src="/logo.svg" alt="Servomatrix" className="nav-logo-svg" />
            </a>
            <p>Building automation and controls engineering for the built environment.</p>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" onClick={e => { e.preventDefault(); smoothScroll('#services') }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              {companyLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={e => { e.preventDefault(); smoothScroll(l.href) }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Protocols</h4>
            <ul>
              {protocolLinks.map(p => (
                <li key={p}>
                  <a href="#services" onClick={e => { e.preventDefault(); smoothScroll('#services') }}>{p}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2025 Servomatrix. All rights reserved.</span>
          <span className="footer-mono">servomatrix.com</span>
        </div>
      </div>
    </motion.footer>
  )
}
