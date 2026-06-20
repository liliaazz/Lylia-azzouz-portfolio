import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import type { Milestone } from '@/types/journey.types'
import clsx from 'clsx'

interface JourneyMilestoneProps {
  milestone: Milestone
  /** which side of the path this node sits on */
  side: 'left' | 'right'
  delay?: number
}

const accentMap = {
  blue: {
    ring:    'ring-brand-blue/30',
    iconBg:  'bg-brand-blue/10',
    iconText:'text-brand-blue',
    dot:     'bg-brand-blue',
    border:  'border-brand-blue/20',
    tag:     'bg-blue-50 text-blue-700',
    glow:    'shadow-[0_0_24px_rgba(59,130,246,0.18)]',
    year:    'text-brand-blue',
  },
  yellow: {
    ring:    'ring-brand-yellow/40',
    iconBg:  'bg-brand-yellow/15',
    iconText:'text-[#B8941F]',
    dot:     'bg-brand-yellow',
    border:  'border-brand-yellow/25',
    tag:     'bg-yellow-50 text-[#B8941F]',
    glow:    'shadow-[0_0_24px_rgba(245,200,66,0.22)]',
    year:    'text-[#B8941F]',
  },
}

export function JourneyMilestone({ milestone, side, delay = 0 }: JourneyMilestoneProps) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.3 })
  const colors = accentMap[milestone.accent]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === 'left' ? -32 : 32, y: 16 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'flex items-start gap-4',
        side === 'right' && 'flex-row-reverse',
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Node dot + icon ── */}
      <motion.div
        animate={hovered ? { scale: 1.12 } : { scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className="relative flex-shrink-0 mt-1"
      >
        {/* Outer pulse ring — special milestones always pulse */}
        {(milestone.special || hovered) && (
          <motion.span
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
            className={clsx(
              'absolute inset-0 rounded-full',
              colors.dot,
            )}
          />
        )}

        <div
          className={clsx(
            'relative w-12 h-12 rounded-2xl flex items-center justify-center',
            'border transition-all duration-300',
            colors.iconBg,
            colors.border,
            hovered && colors.glow,
            milestone.special && 'ring-2 ' + colors.ring,
          )}
        >
          <span className="text-xl leading-none select-none" aria-hidden="true">
            {milestone.icon}
          </span>
        </div>
      </motion.div>

      {/* ── Content card ── */}
      <motion.div
        animate={hovered
          ? { y: -3, boxShadow: '0 12px 36px rgba(26,46,74,0.10)' }
          : { y: 0,  boxShadow: '0 2px 12px rgba(26,46,74,0.05)' }
        }
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className={clsx(
          'relative bg-white/85 backdrop-blur-sm',
          'border border-[rgba(26,46,74,0.08)] rounded-2xl',
          'px-5 py-4 max-w-[280px] cursor-default',
          'transition-colors duration-200',
          hovered && 'bg-white/98',
          milestone.special && 'border-brand-yellow/30',
        )}
      >
        {/* Special badge */}
        {milestone.special && (
          <span className="absolute -top-2.5 left-4 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-yellow text-[#7A5F00]">
            Turning Point
          </span>
        )}

        <div className="flex items-center gap-2 mb-1.5">
          {milestone.year && (
            <span className={clsx('text-[10px] font-bold tracking-widest uppercase', colors.year)}>
              {milestone.year}
            </span>
          )}
        </div>

        <h3 className="text-[15px] font-bold text-ink mb-1.5 leading-snug">
          {milestone.title}
        </h3>

        <motion.p
          initial={{ opacity: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          className="text-[12.5px] leading-relaxed text-muted"
        >
          {milestone.description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
