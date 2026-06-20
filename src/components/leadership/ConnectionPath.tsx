import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface ConnectionPathProps {
  /** Direction of the connecting curve */
  direction?: 'horizontal' | 'diagonal-down' | 'diagonal-up'
  accent?: 'yellow' | 'blue'
  delay?: number
}

const strokeColor = {
  yellow: 'rgba(245,200,66,0.35)',
  blue:   'rgba(59,130,246,0.22)',
}

export function ConnectionPath({
  direction = 'horizontal',
  accent = 'yellow',
  delay = 0,
}: ConnectionPathProps) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  const paths: Record<string, string> = {
    'horizontal':     'M0 20 Q50 5 100 20',
    'diagonal-down':  'M0 5  Q50 30 100 50',
    'diagonal-up':    'M0 50 Q50 25 100 5',
  }

  const d = paths[direction]

  return (
    <div
      ref={ref}
      className="flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 55"
        className="w-full h-12 overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Ghost path always visible */}
        <path
          d={d}
          fill="none"
          stroke={strokeColor[accent]}
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* Animated fill path */}
        <motion.path
          d={d}
          fill="none"
          stroke={strokeColor[accent]}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
        />

        {/* Travelling dot along the path */}
        {inView && (
          <motion.circle
            r="2.5"
            fill={accent === 'yellow' ? '#F5C842' : '#3B82F6'}
            initial={{ offsetDistance: '0%', opacity: 0 }}
            animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.4,
              delay: delay + 0.3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
            style={{
              offsetPath: `path('${d}')`,
            } as React.CSSProperties}
          />
        )}
      </svg>
    </div>
  )
}
