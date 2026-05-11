/* ============================================================
   SERVOMATRIX — script.js
   ============================================================ */

'use strict';

/* ── NAV: scroll state & mobile toggle ───────────────────── */
(function initNav() {
  const navbar    = document.getElementById('navbar');
  const toggle    = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  // Scroll state
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    // Animate hamburger → X
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
})();


/* ── SMOOTH SCROLL: for browsers that need a nudge ──────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72; // nav height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── SCROLL REVEAL ────────────────────────────────────────── */
(function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.service-card, .sector-card, .about-card, .process-step, .hero-badge, .hero-heading, .hero-sub, .hero-actions, .hero-stats'
  );

  // Set initial hidden state
  elements.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();


/* ── ACTIVE NAV LINK on scroll ────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActive() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
})();


/* ── CONTACT FORM ─────────────────────────────────────────── */
(function initContactForm() {
  const form   = document.getElementById('contactForm');
  const notice = document.getElementById('formNotice');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      showNotice('error', 'Please complete all required fields (marked with *).');
      return;
    }

    if (!isValidEmail(email)) {
      showNotice('error', 'Please enter a valid email address.');
      return;
    }

    // Submit to Web3Forms
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    const data = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          showNotice('success', 'Thank you — your enquiry has been received. We will respond within one business day.');
          form.reset();
        } else {
          showNotice('error', json.message || 'Something went wrong. Please try again or email us directly.');
        }
      })
      .catch(() => {
        showNotice('error', 'Network error — please check your connection and try again.');
      })
      .finally(() => {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Enquiry';
      });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showNotice(type, message) {
    notice.className  = `form-notice ${type}`;
    notice.textContent = message;
    notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // Auto-clear after 8s
    setTimeout(() => {
      notice.className  = 'form-notice';
      notice.textContent = '';
    }, 8000);
  }
})();


/* ── BMS NODE HOVER HIGHLIGHT ─────────────────────────────── */
(function initBMSInteraction() {
  const nodes = document.querySelectorAll('.bms-node');
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      node.style.transform = node.style.transform.includes('translateX')
        ? node.style.transform.replace(/scale\([^)]*\)/, '') + ' scale(1.1)'
        : (node.style.transform || '') + ' scale(1.1)';
    });
    node.addEventListener('mouseleave', () => {
      node.style.transform = node.style.transform.replace(/\s*scale\([^)]*\)/g, '');
    });
  });
})();


/* ── TICKER: pause on hover ───────────────────────────────── */
(function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
})();
