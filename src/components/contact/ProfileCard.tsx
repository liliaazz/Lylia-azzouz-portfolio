import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROFILE_ROLES, HIDDEN_INTERESTS } from '@/constants/contact.constants'

interface ProfileCardProps {
  imageSrc?: string
}

export function ProfileCard({ imageSrc }: ProfileCardProps) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [showHidden, setShowHidden] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % PROFILE_ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      animate={{ y: [0, -6, 0] }}
      // Note: Framer merges animate + whileInView; the float starts after entry
      className="relative bg-white/92 backdrop-blur-sm border border-[rgba(26,46,74,0.09)]
                 rounded-2xl overflow-hidden
                 shadow-[0_8px_40px_rgba(26,46,74,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]"
      style={{
        // Override animate to float only after mount — handled via CSS animation below
        animation: 'profileFloat 6s ease-in-out 0.8s infinite',
      }}
    >
      {/* Yellow top bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-yellow via-[#F5C842] to-brand-blue" />

      <div className="p-5">
        {/* Photo + name row */}
        <div className="flex items-center gap-4 mb-4">
          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-yellow/30
                            shadow-[0_4px_14px_rgba(245,200,66,0.20)]">
              {imageSrc ? (
                <img src={imageSrc} alt="Lylia" className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#E0EDFA] to-[#C8DDF0]
                                flex items-center justify-center text-2xl">
                  👩‍💻
                </div>
              )}
            </div>
            {/* Online indicator */}
            <span
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white"
              style={{ animation: 'avPulse 2s ease-in-out infinite' }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-extrabold text-ink leading-tight mb-0.5">
              Lylia Azzouz
            </p>
            {/* Animated role */}
            <div className="h-[16px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ opacity: 0, y: -5, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                  exit={{ opacity: 0,  y:  5,  filter: 'blur(3px)' }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[11.5px] font-semibold text-brand-blue"
                >
                  {PROFILE_ROLES[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl px-3 py-2.5 mb-4">
          <p className="text-[11.5px] text-[#7A5F00] leading-snug">
            Currently learning, building, mentoring, and exploring new opportunities.
          </p>
        </div>

        {/* Location + availability */}
        <div className="flex items-center justify-between text-[11px] text-muted mb-3">
          <span>📍 Algeria</span>
          <span className="flex items-center gap-1.5 text-green-700 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Open to collab
          </span>
        </div>

        {/* Hidden interests — discoverable */}
        <button
          onClick={() => setShowHidden(s => !s)}
          className="w-full text-left text-[10px] font-bold tracking-[0.08em] uppercase
                     text-muted/60 hover:text-muted transition-colors duration-150 cursor-pointer"
        >
          {showHidden ? '▲' : '▼'} Current interests
        </button>

        <AnimatePresence>
          {showHidden && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-2 flex flex-col gap-1">
                {HIDDEN_INTERESTS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2 text-[11.5px] text-muted"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-yellow flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
