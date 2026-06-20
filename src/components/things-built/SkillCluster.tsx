import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SkillGroup } from '@/types/things-built.types'
import clsx from 'clsx'

interface SkillClusterProps {
  groups: SkillGroup[]
}

const groupAccent: Record<string, { pill: string; header: string; glow: string }> = {
  blue: {
    pill:   'bg-blue-50 text-blue-700 border border-blue-100 hover:bg-brand-blue hover:text-white hover:border-brand-blue',
    header: 'text-brand-blue',
    glow:   'shadow-[0_0_16px_rgba(59,130,246,0.15)]',
  },
  yellow: {
    pill:   'bg-brand-yellow/15 text-[#7A5F00] border border-brand-yellow/25 hover:bg-brand-yellow hover:text-[#5A4300] hover:border-brand-yellow',
    header: 'text-[#B8941F]',
    glow:   'shadow-[0_0_16px_rgba(245,200,66,0.20)]',
  },
  purple: {
    pill:   'bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-600 hover:text-white hover:border-purple-600',
    header: 'text-purple-700',
    glow:   'shadow-[0_0_16px_rgba(147,51,234,0.12)]',
  },
  green: {
    pill:   'bg-green-50 text-green-700 border border-green-100 hover:bg-green-600 hover:text-white hover:border-green-600',
    header: 'text-green-700',
    glow:   'shadow-[0_0_16px_rgba(34,197,94,0.12)]',
  },
}

export function SkillCluster({ groups }: SkillClusterProps) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-5 mt-2">
      {groups.map((group) => {
        const colors  = groupAccent[group.accent] ?? groupAccent.yellow
        const isOpen  = activeGroup === group.id || activeGroup === null

        return (
          <div key={group.id}>
            {/* Group label */}
            <button
              onClick={() =>
                setActiveGroup(prev => (prev === group.id ? null : group.id))
              }
              className={clsx(
                'flex items-center gap-2 mb-2.5 cursor-pointer',
                'text-[10px] font-bold tracking-[0.09em] uppercase',
                colors.header,
              )}
            >
              <span className="w-4 h-px bg-current opacity-40" />
              {group.label}
              <span className="opacity-50 text-[9px]">
                {activeGroup === group.id ? '▲' : '▼'}
              </span>
            </button>

            {/* Skill pills */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className={clsx(
                          'px-3 py-1 rounded-full text-[11px] font-semibold',
                          'cursor-default transition-all duration-200',
                          colors.pill,
                        )}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
