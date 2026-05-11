import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Brief & Requirements',
    desc: 'We define scope, system boundaries, protocol requirements, and performance criteria with the project team. No assumptions — everything documented from the outset.',
  },
  {
    num: '02',
    title: 'Engineering Design',
    desc: 'DDC architecture, network diagrams, I/O schedules, panel schematics, and control sequence descriptions — complete design documentation before any fabrication or programming begins.',
  },
  {
    num: '03',
    title: 'Build & Programme',
    desc: 'Panel fabrication, controller configuration, software programming, and bench testing completed in a controlled environment before site delivery.',
  },
  {
    num: '04',
    title: 'Commission & Verify',
    desc: 'Systematic point-by-point verification, sequence testing, and functional performance testing with the mechanical and electrical teams. Every alarm, every setpoint, every interlock confirmed.',
  },
  {
    num: '05',
    title: 'Handover & Support',
    desc: 'Full O&M documentation, operator training, and transition to ongoing support arrangements. Systems handed over ready to operate — not to debug.',
  },
]

const stepVariant = {
  hidden:  { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Process() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.25'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="process section" id="process" ref={sectionRef}>
      <div className="container">

        <motion.div
          className="section-header-centered"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-tag">How We Work</div>
          <h2 className="section-heading">A Disciplined Engineering Process</h2>
          <p className="section-intro">
            Every Servomatrix engagement follows a structured methodology from brief to handover.
          </p>
        </motion.div>

        <div className="process-timeline">

          {/* Animated vertical track line */}
          <div className="process-track">
            <motion.div className="process-track-fill" style={{ scaleY }} />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step"
              custom={i}
              variants={stepVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="process-dot">
                <div className="process-dot-inner" />
              </div>
              <div className="process-step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
