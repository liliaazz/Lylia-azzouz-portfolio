import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ContactPathData, PathIcon, SocialPlatform } from '@/types/contact.types'
import clsx from 'clsx'

interface ContactPathProps {
  path:   ContactPathData
  delay?: number
}

// Icon components per path type
function PathIconSVG({ icon }: { icon: PathIcon }) {
  const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  if (icon === 'rocket') return (
    <svg {...base}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m3.29 15 1.33-1.33A6 6 0 0 0 6 10c0-4 3-6 6-6s6 2 6 6a6 6 0 0 0-1.38 3.67L15 15"/>
      <path d="M9 12h6M12 9v3"/>
    </svg>
  )
  if (icon === 'puzzle') return (
    <svg {...base}>
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.408 0l-1.569-1.569c-.23-.23-.556-.338-.878-.29-.411.061-.82.388-.986.834a2.501 2.501 0 1 1-3.646-3.646c.446-.166.773-.575.834-.986.048-.322-.06-.648-.29-.878L4.111 12.1a2.404 2.404 0 0 1 0-3.407l1.568-1.568c.23-.23.338-.556.29-.878-.062-.41-.389-.82-.835-.986a2.501 2.501 0 1 1 3.646-3.646c.166.446.575.773.986.834.322.048.648-.06.878-.29l1.67-1.67a2.404 2.404 0 0 1 3.408 0l1.568 1.568c.23.23.556.338.878.29.41-.061.82-.388.986-.834a2.501 2.501 0 1 1 3.645 3.645c-.445.166-.772.576-.834.986z"/>
    </svg>
  )
  if (icon === 'book') return (
    <svg {...base}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </svg>
  )
  // compass
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  )
}

// Platform chip colors
const platformChip: Record<SocialPlatform, string> = {
  linkedin:  'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-600 hover:text-white',
  github:    'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-800 hover:text-white',
  instagram: 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-500 hover:text-white',
  email:     'bg-brand-yellow/15 text-[#7A5F00] border-brand-yellow/25 hover:bg-brand-yellow hover:text-[#5A4300]',
}

export function ContactPath({ path, delay = 0 }: ContactPathProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          'w-full text-left bg-white/90 backdrop-blur-sm',
          'border rounded-2xl px-5 py-4 cursor-pointer',
          'shadow-[0_2px_12px_rgba(26,46,74,0.06)]',
          'transition-all duration-200',
          open
            ? 'border-brand-yellow/40 shadow-[0_8px_28px_rgba(245,200,66,0.16)]'
            : 'border-[rgba(26,46,74,0.08)] hover:border-brand-yellow/30 hover:shadow-[0_6px_20px_rgba(26,46,74,0.09)]',
        )}
      >
        <div className="flex items-center gap-3">
          {/* Icon bubble */}
          <div className={clsx(
            'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200',
            open ? 'bg-brand-yellow text-[#5A4300]' : 'bg-brand-yellow/15 text-[#B8941F]',
          )}>
            <PathIconSVG icon={path.icon} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[13.5px] font-bold text-ink leading-snug">{path.title}</p>
          </div>

          {/* Chevron */}
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted text-[13px] flex-shrink-0"
          >
            →
          </motion.span>
        </div>
      </motion.button>

      {/* Expanded panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 px-1">
              <div className="bg-white/70 border border-brand-yellow/15 rounded-2xl px-5 py-4">
                <p className="text-[12.5px] leading-relaxed text-muted mb-4">
                  {path.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {path.links.map(link => (
                    <motion.a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.07, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className={clsx(
                        'inline-flex items-center gap-1.5 px-3.5 py-1.5',
                        'rounded-full border text-[11.5px] font-semibold',
                        'no-underline transition-all duration-180',
                        platformChip[link.platform],
                      )}
                    >
                      {link.label} ↗
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
