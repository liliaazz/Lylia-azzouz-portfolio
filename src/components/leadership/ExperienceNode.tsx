import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import type { ExperienceNodeData } from '@/types/leadership.types'
import clsx from 'clsx'

interface ExperienceNodeProps {
  node:  ExperienceNodeData
  delay?: number
}

const accentMap = {
  yellow: {
    border:   'border-brand-yellow/30',
    topBar:   'bg-brand-yellow',
    roleBg:   'bg-brand-yellow/15 text-[#7A5F00]',
    dot:      'bg-brand-yellow',
    bullet:   'bg-brand-yellow',
    ring:     'ring-brand-yellow/30',
    iconText: 'text-[#B8941F]',
    glow:     '0 16px 40px rgba(245,200,66,0.18)',
    noteBg:   'bg-brand-yellow/10 border-brand-yellow/20 text-[#7A5F00]',
  },
  blue: {
    border:   'border-brand-blue/20',
    topBar:   'bg-brand-blue',
    roleBg:   'bg-brand-blue/10 text-blue-700',
    dot:      'bg-brand-blue',
    bullet:   'bg-brand-blue',
    ring:     'ring-brand-blue/25',
    iconText: 'text-brand-blue',
    glow:     '0 16px 40px rgba(59,130,246,0.14)',
    noteBg:   'bg-blue-50 border-blue-100 text-blue-700',
  },
  gold: {
    border:   'border-[#E6B800]/40',
    topBar:   'bg-gradient-to-r from-brand-yellow to-[#E6A800]',
    roleBg:   'bg-[#FFF3CC] text-[#7A5F00]',
    dot:      'bg-brand-yellow',
    bullet:   'bg-[#E6A800]',
    ring:     'ring-[#E6B800]/40',
    iconText: 'text-[#B8941F]',
    glow:     '0 20px 52px rgba(245,200,66,0.28)',
    noteBg:   'bg-[#FFF8E0] border-[#E6B800]/30 text-[#7A5F00]',
  },
}

// Simple emoji icons per node id
const nodeIcons: Record<string, string> = {
  'future-tech-club':  '⚙️',
  'micro-club':        '💻',
  'world-learning':    '🌱',
  'ai-forge-journey':  '🌟',
  'ai-forge-mentor':   '🤝',
  'hackathon':         '🚀',
  'algerie-telecom':   '🖧',
  'algerie-satellite': '📡',
}

export function ExperienceNode({ node, delay = 0 }: ExperienceNodeProps) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView }       = useInView({ threshold: 0.2 })
  const colors                = accentMap[node.accent]
  const icon                  = nodeIcons[node.id] ?? '✦'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -5,
        boxShadow: colors.glow,
        transition: { type: 'spring', stiffness: 280, damping: 22 },
      }}
      className={clsx(
        'relative bg-white/88 backdrop-blur-sm rounded-2xl overflow-hidden',
        'border cursor-default',
        'shadow-[0_3px_16px_rgba(26,46,74,0.07)]',
        colors.border,
        node.special && 'ring-2 ' + colors.ring,
      )}
    >
      {/* Coloured top bar — thicker for special */}
      <div className={clsx('w-full', colors.topBar, node.special ? 'h-[4px]' : 'h-[3px]')} />

      <div className="p-5">
        {/* Special "turning point" badge */}
        {node.special && (
          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-yellow/20 border border-brand-yellow/30">
            <span className="text-[10px]">⭐</span>
            <span className="text-[9.5px] font-bold tracking-wider uppercase text-[#7A5F00]">
              Key Chapter
            </span>
          </div>
        )}

        {/* Header: icon + title + role */}
        <div className="flex items-start gap-3 mb-3">
          <motion.div
            animate={hovered ? { rotate: [-5, 5, 0], scale: 1.15 } : {}}
            transition={{ duration: 0.45 }}
            className="text-xl leading-none flex-shrink-0 mt-0.5"
            aria-hidden="true"
          >
            {icon}
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3 className="text-[14.5px] font-extrabold text-ink leading-snug mb-1">
              {node.title}
            </h3>
            <span className={clsx(
              'inline-flex items-center px-2.5 py-0.5 rounded-full',
              'text-[10px] font-bold tracking-[0.06em] uppercase',
              colors.roleBg,
            )}>
              {node.role}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[12.5px] leading-relaxed text-muted mb-3">
          {node.description}
        </p>

        {/* Highlights — revealed on hover with smooth animation */}
        <AnimatePresence>
          {node.highlights && node.highlights.length > 0 && (hovered || node.special) && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1 mb-3 overflow-hidden"
            >
              {node.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2 text-[11.5px] font-medium text-ink/70"
                >
                  <span className={clsx('w-1.5 h-1.5 rounded-full flex-shrink-0', colors.bullet)} />
                  {h}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Sponsor / special note */}
        {node.note && (
          <div className={clsx(
            'mt-2 px-3 py-2 rounded-xl border text-[11px] leading-snug',
            colors.noteBg,
          )}>
            {node.note}
          </div>
        )}
      </div>

      {/* Hover shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  )
}
