import { motion } from 'framer-motion'
import { floatingCardVariant } from '@/animations/variants'
import type { FloatingCard } from '@/types/hero.types'

interface FloatingMissionCardProps {
  card: FloatingCard
}

export function FloatingMissionCard({ card }: FloatingMissionCardProps) {
  return (
    <motion.div
      variants={floatingCardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: card.animationDelay }}
      style={{
        position: 'fixed',
        ...card.position,
        animation: `floatCard 6.5s ease-in-out ${card.animationDelay}s infinite`,
      }}
      className={[
        'glass rounded-2xl',
        'px-[18px] py-[14px]',
        'shadow-[0_8px_32px_rgba(26,46,74,0.09),inset_0_1px_0_rgba(255,255,255,0.9)]',
        'z-20 min-w-[160px] max-w-[200px]',
      ].join(' ')}
    >
      <p className="text-[9px] font-bold tracking-[0.09em] uppercase text-muted mb-2">
        {card.title}
      </p>
      <p className="text-[12px] leading-relaxed text-muted italic">
        {card.body}
      </p>
    </motion.div>
  )
}
