import { motion } from 'framer-motion'
import { badgeEntranceVariant } from '@/animations/variants'
import type { IdentityBadgeProps } from '@/types/hero.types'
import clsx from 'clsx'

const colorMap: Record<
  IdentityBadgeProps['colorClass'],
  { badge: string; icon: string; text: string }
> = {
  blue: {
    badge: 'bg-[rgba(239,246,255,0.92)] border-white/70',
    icon:  'bg-[rgba(59,130,246,0.15)]',
    text:  'text-blue-700',
  },
  yellow: {
    badge: 'bg-[rgba(254,252,232,0.95)] border-white/70',
    icon:  'bg-[rgba(245,200,66,0.25)]',
    text:  'text-[#B8941F]',
  },
  green: {
    badge: 'bg-[rgba(240,253,244,0.92)] border-white/70',
    icon:  'bg-[rgba(34,197,94,0.15)]',
    text:  'text-green-700',
  },
  navy: {
    badge: 'bg-[rgba(26,46,74,0.88)] border-white/20',
    icon:  'bg-white/15',
    text:  'text-white',
  },
}

export function IdentityBadge({
  label,
  icon,
  colorClass,
  animationDelay,
  position,
  index,
}: IdentityBadgeProps) {
  const colors = colorMap[colorClass]

  const floatDuration  = [5.5, 6.2, 7.0, 5.8][index % 4]

  return (
    <motion.div
      variants={badgeEntranceVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 + animationDelay }}
      whileHover={{ scale: 1.08, y: -2 }}
      style={{
        position: 'absolute',
        ...position,
        animation: `floatBadge ${floatDuration}s ease-in-out ${animationDelay}s infinite`,
      }}
      className={clsx(
        'flex items-center gap-[7px]',
        'px-[13px] py-[8px] rounded-full',
        'text-[11px] font-semibold whitespace-nowrap',
        'backdrop-blur-[14px]',
        'border shadow-[0_4px_16px_rgba(0,0,0,0.09)]',
        'cursor-default z-10',
        'transition-shadow duration-200',
        'hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]',
        colors.badge,
        colors.text,
      )}
    >
      <span
        className={clsx(
          'w-5 h-5 rounded-[6px]',
          'flex items-center justify-center text-[11px]',
          colors.icon,
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
      {label}
    </motion.div>
  )
}
