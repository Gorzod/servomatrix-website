import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about',    label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#sectors',  label: 'Sectors' },
  { href: '#process',  label: 'Process' },
]

function smoothScroll(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    smoothScroll(href)
  }

  return (
    <motion.header
      className={`nav-wrapper${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-inner">
        <a href="#home" onClick={e => handleClick(e, '#home')} className="nav-logo">
          <img src="/logo.svg" alt="Servomatrix" className="nav-logo-svg" />
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: 24, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.18 }}
            style={{ display: 'block', width: 24, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'block', width: 24, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}
          />
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href={link.href} onClick={e => handleClick(e, link.href)}>
                {link.label}
              </a>
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="#contact"
              className="nav-cta"
              onClick={e => handleClick(e, '#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in Touch
            </motion.a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}
