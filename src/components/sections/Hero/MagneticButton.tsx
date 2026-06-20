import { motion } from 'framer-motion'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'
import { snappySpring } from '@/animations/springs'
import type { MagneticButtonProps } from '@/types/hero.types'
import clsx from 'clsx'

const variantStyles: Record<MagneticButtonProps['variant'], string> = {
  primary: [
    'bg-navy text-white',
    'shadow-[0_2px_10px_rgba(26,46,74,0.20)]',
    'hover:shadow-[0_8px_28px_rgba(26,46,74,0.26)]',
  ].join(' '),
  yellow: [
    'bg-brand-yellow text-brand-yellow-dark',
    'shadow-[0_2px_10px_rgba(245,200,66,0.30)]',
    'hover:shadow-[0_8px_26px_rgba(245,200,66,0.42)]',
  ].join(' '),
  secondary: [
    'bg-white/75 text-navy border border-[rgba(26,46,74,0.13)]',
    'backdrop-blur-sm',
    'hover:bg-white/95 hover:shadow-[0_6px_20px_rgba(26,46,74,0.10)]',
  ].join(' '),
}

export function MagneticButton({
  label,
  variant,
  href = '#',
  showArrow = false,
  onClick,
}: MagneticButtonProps) {
  const { ref, x, y } = useMagneticEffect(0.24)

  return (
    <motion.a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      style={{ x, y }}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', ...snappySpring }}
      className={clsx(
        'relative inline-flex items-center gap-2',
        'px-6 py-3 rounded-[10px]',
        'text-[13px] font-semibold cursor-pointer',
        'no-underline tracking-[0.01em]',
        'transition-shadow duration-200',
        'overflow-hidden',
        variantStyles[variant],
      )}
    >
      {/* Shine overlay */}
      <motion.span
        className="absolute inset-0 bg-white/[0.13] opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      <span className="relative z-10">{label}</span>

      {showArrow && (
        <span
          className="relative z-10"
          style={{ animation: 'arrowSlide 2s ease-in-out infinite' }}
        >
          →
        </span>
      )}
    </motion.a>
  )
}
