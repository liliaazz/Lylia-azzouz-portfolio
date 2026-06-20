import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import type { JourneyEndingData } from '@/types/journey.types'

interface JourneyEndingProps {
  data: JourneyEndingData
}

export function JourneyEnding({ data }: JourneyEndingProps) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center mt-4"
    >
      {/* Animated arrow coming down from the path */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-4 text-brand-yellow text-2xl"
        aria-hidden="true"
      >
        ↓
      </motion.div>

      {/* Destination node */}
      <div className="relative mb-5">
        {/* Outer pulse rings */}
        <motion.span
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-brand-yellow"
        />
        <motion.span
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
          className="absolute inset-0 rounded-full bg-brand-yellow"
        />
        <div className="relative w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_0_32px_rgba(245,200,66,0.35)]">
          <span className="text-2xl" aria-hidden="true">🚀</span>
        </div>
      </div>

      {/* Text */}
      <h3 className="text-[22px] font-extrabold text-ink mb-3 tracking-tight">
        {data.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted max-w-[360px]">
        {data.description}
      </p>

      {/* Forward arrow indicator */}
      <motion.div
        className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-brand-blue"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        The story continues
        <span aria-hidden="true">→</span>
      </motion.div>
    </motion.div>
  )
}
