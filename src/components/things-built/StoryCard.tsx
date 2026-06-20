import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { CategoryBadge } from './CategoryBadge'
import { LanguageCard }  from './LanguageCard'
import { SkillCluster }  from './SkillCluster'
import type { StoryCardData } from '@/types/things-built.types'
import type { SkillGroup, Language } from '@/types/things-built.types'
import clsx from 'clsx'

interface StoryCardProps {
  card:          StoryCardData
  delay?:        number
  skillGroups?:  SkillGroup[]
  languages?:    Language[]
  /** slight initial tilt so cards look organic */
  tilt?:         number
}

// ── Per-accent border / background tokens ──────────────────
const accentTokens = {
  yellow: {
    border:  'border-brand-yellow/30',
    topBar:  'bg-brand-yellow',
    tagBg:   'bg-brand-yellow/12 text-[#7A5F00]',
    iconRing:'bg-brand-yellow/20',
  },
  blue: {
    border:  'border-brand-blue/20',
    topBar:  'bg-brand-blue',
    tagBg:   'bg-blue-50 text-blue-700',
    iconRing:'bg-brand-blue/15',
  },
  green: {
    border:  'border-green-200',
    topBar:  'bg-green-500',
    tagBg:   'bg-green-50 text-green-700',
    iconRing:'bg-green-100',
  },
  purple: {
    border:  'border-purple-200',
    topBar:  'bg-purple-500',
    tagBg:   'bg-purple-50 text-purple-700',
    iconRing:'bg-purple-100',
  },
}

// ── Decorative background blobs per card type ───────────────
function DecorativeBlob({ type }: { type: StoryCardData['decorative'] }) {
  if (!type) return null

  const blobs: Record<NonNullable<StoryCardData['decorative']>, React.ReactNode> = {
    'data-stream': (
      <svg
        className="absolute bottom-3 right-3 opacity-[0.07] pointer-events-none"
        width="80" height="60" viewBox="0 0 80 60"
      >
        {[0,12,24,36,48].map((y, i) => (
          <motion.line
            key={i}
            x1="0" y1={y} x2="80" y2={y + 12}
            stroke="#3B82F6" strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: i * 0.12, duration: 0.8 }}
          />
        ))}
      </svg>
    ),
    terrain: (
      <svg
        className="absolute bottom-2 right-2 opacity-[0.08] pointer-events-none"
        width="80" height="48" viewBox="0 0 80 48"
      >
        <path d="M0 48 L20 20 L40 32 L60 8 L80 24 L80 48 Z"
          fill="#F5C842" />
      </svg>
    ),
    puzzle: (
      <svg
        className="absolute top-4 right-4 opacity-[0.08] pointer-events-none"
        width="48" height="48" viewBox="0 0 48 48"
      >
        <rect x="4"  y="4"  width="18" height="18" rx="3" fill="#8B5CF6"/>
        <rect x="26" y="4"  width="18" height="18" rx="3" fill="#8B5CF6"/>
        <rect x="4"  y="26" width="18" height="18" rx="3" fill="#8B5CF6"/>
        <rect x="26" y="26" width="18" height="18" rx="3" fill="#8B5CF6"/>
      </svg>
    ),
    people: (
      <svg
        className="absolute bottom-3 right-3 opacity-[0.07] pointer-events-none"
        width="64" height="40" viewBox="0 0 64 40"
      >
        {[8, 32, 56].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy="12" r="7" fill="#22c55e"/>
            <path d={`M${cx - 12} 40 Q${cx} 22 ${cx + 12} 40`} fill="#22c55e"/>
          </g>
        ))}
      </svg>
    ),
    languages: null,
    skills:    null,
  }

  return <>{blobs[type]}</>
}

export function StoryCard({
  card,
  delay = 0,
  skillGroups,
  languages,
  tilt = 0,
}: StoryCardProps) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView }       = useInView({ threshold: 0.15 })
  const tokens                = accentTokens[card.accent]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, rotate: tilt }}
      animate={inView
        ? { opacity: 1, y: 0, rotate: tilt }
        : { opacity: 0, y: 32, rotate: tilt }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        rotate: 0,
        y: -6,
        scale: 1.02,
        boxShadow: '0 20px 52px rgba(26,46,74,0.13)',
        transition: { type: 'spring', stiffness: 280, damping: 22 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={clsx(
        'relative bg-white/90 backdrop-blur-sm',
        'border rounded-2xl overflow-hidden',
        'cursor-default',
        'shadow-[0_4px_20px_rgba(26,46,74,0.07)]',
        tokens.border,
      )}
    >
      {/* Coloured top bar */}
      <div className={clsx('h-[3px] w-full', tokens.topBar)} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-col gap-1.5">
            <CategoryBadge label={card.category} accent={card.accent} />
            <h3 className="text-[15px] font-extrabold text-ink leading-snug">
              {card.title}
            </h3>
          </div>
          {/* Icon */}
          <div className={clsx(
            'w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-xl',
            tokens.iconRing,
          )}>
            <motion.span
              animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.15 } : {}}
              transition={{ duration: 0.5 }}
            >
              {card.emoji}
            </motion.span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[12.5px] leading-relaxed text-muted mb-3">
          {card.description}
        </p>

        {/* Highlights */}
        {card.highlights.length > 0 && (
          <ul className="flex flex-col gap-1 mb-3">
            {card.highlights.map((h) => (
              <li
                key={h.text}
                className="flex items-center gap-2 text-[11.5px] font-medium text-ink/70"
              >
                <span className={clsx(
                  'w-1.5 h-1.5 rounded-full flex-shrink-0',
                  card.accent === 'yellow' ? 'bg-brand-yellow' : 'bg-brand-blue',
                )} />
                {h.text}
              </li>
            ))}
          </ul>
        )}

        {/* Tags row */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {card.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.07 }}
                className={clsx(
                  'px-2.5 py-0.5 rounded-full text-[10px] font-semibold',
                  tokens.tagBg,
                )}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Injected special content */}
        {card.decorative === 'languages' && languages && (
          <LanguageCard languages={languages} />
        )}
        {card.decorative === 'skills' && skillGroups && (
          <SkillCluster groups={skillGroups} />
        )}
      </div>

      {/* Decorative SVG blob */}
      <DecorativeBlob type={card.decorative} />
    </motion.div>
  )
}
