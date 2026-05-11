import { motion } from 'framer-motion'

const nodes = [
  { id: 1, label: 'HVAC',     cx: 200, cy: 55  },
  { id: 2, label: 'DDC',      cx: 338, cy: 128 },
  { id: 3, label: 'Energy',   cx: 338, cy: 272 },
  { id: 4, label: 'Lighting', cx: 200, cy: 345 },
  { id: 5, label: 'BACnet',   cx: 62,  cy: 272 },
  { id: 6, label: 'Modbus',   cx: 62,  cy: 128 },
]

export default function BMSDiagram() {
  return (
    <motion.div
      className="bms-diagram"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg className="bms-svg" viewBox="0 0 400 400">
        {/* Dashed orbit ring */}
        <motion.circle
          cx={200} cy={200} r={135}
          fill="none"
          stroke="rgba(0,212,180,0.07)"
          strokeWidth={1}
          strokeDasharray="3 7"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* Connection lines with travelling dash animation */}
        {nodes.map((node, i) => (
          <motion.line
            key={`line-${node.id}`}
            x1={200} y1={200}
            x2={node.cx} y2={node.cy}
            stroke="rgba(0,212,180,0.3)"
            strokeWidth={1}
            strokeDasharray="5 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, strokeDashoffset: [0, -60] }}
            transition={{
              opacity:          { duration: 0.5, delay: 1.1 + i * 0.1 },
              strokeDashoffset: { duration: 3.5, repeat: Infinity, ease: 'linear', delay: i * 0.35 },
            }}
          />
        ))}

        {/* Data packets travelling outward then back */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`pkt-${node.id}`}
            r={2.5}
            fill="var(--cyan)"
            filter="url(#glow)"
            initial={{ cx: 200, cy: 200, opacity: 0 }}
            animate={{
              cx:      [200, node.cx, 200],
              cy:      [200, node.cy, 200],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 2.6,
              repeat:   Infinity,
              delay:    1.5 + i * 0.55,
              ease:     'easeInOut',
            }}
          />
        ))}

        {/* SVG glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Centre pulsing ring */}
      <motion.div
        className="bms-center"
        animate={{
          boxShadow: [
            '0 0 16px rgba(0,212,180,0.18)',
            '0 0 48px rgba(0,212,180,0.48)',
            '0 0 16px rgba(0,212,180,0.18)',
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="bms-core-label">BMS<br />CORE</span>
      </motion.div>

      {/* Outer nodes — wrapper div holds CSS position; inner motion.div animates */}
      {nodes.map((node, i) => (
        <div key={node.id} className={`bms-node-wrapper bms-node-wrapper-${i + 1}`}>
          <motion.div
            className="bms-node"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 1.2 + i * 0.1 },
              scale:   { type: 'spring', stiffness: 260, damping: 18, delay: 1.2 + i * 0.1 },
              y: {
                duration:  2.6 + i * 0.28,
                repeat:    Infinity,
                ease:      'easeInOut',
                delay:     i * 0.45,
              },
            }}
            whileHover={{
              scale:       1.14,
              borderColor: 'var(--cyan)',
              boxShadow:   '0 0 22px rgba(0,212,180,0.28)',
              transition:  { duration: 0.2 },
            }}
          >
            <span>{node.label}</span>
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}
