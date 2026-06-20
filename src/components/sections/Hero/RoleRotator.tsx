import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { roleVariant } from '@/animations/variants'
import type { RoleRotatorProps } from '@/types/hero.types'
import { ROLE_INTERVAL_MS } from '@/constants/hero.constants'

export function RoleRotator({ roles, intervalMs = ROLE_INTERVAL_MS }: RoleRotatorProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex(i => (i + 1) % roles.length),
      intervalMs,
    )
    return () => clearInterval(id)
  }, [roles.length, intervalMs])

  return (
    <div className="flex items-center gap-2 mb-[22px]">
      {/* Yellow pulse pip */}
      <span
        className="w-[7px] h-[7px] rounded-full bg-brand-yellow flex-shrink-0"
        style={{ animation: 'pipPulse 2.2s ease-in-out infinite' }}
      />

      {/* Animated role label */}
      <div className="relative h-[16px] overflow-hidden min-w-[220px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            variants={roleVariant}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 text-[11px] font-bold tracking-[0.09em] uppercase text-brand-blue"
          >
            {roles[index].label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
