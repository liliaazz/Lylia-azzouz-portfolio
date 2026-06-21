import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface JourneySectionHeaderProps {
  label:   string
  heading: string
  subtext: string
}

export function JourneySectionHeader({
  label,
  heading: _heading,
  subtext,
}: JourneySectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <motion.div
      ref={ref}
      className="text-center mb-20"
    >
      {/* Small label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand-blue mb-3"
      >
        {label}
      </motion.p>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight text-ink mb-4 leading-[1.1]"
      >
        From{' '}
        <span className="text-[#B8941F]">Curiosity</span>
        {' '}to{' '}
        <span className="text-brand-blue">Impact</span>
      </motion.h2>

      {/* Decorative yellow underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-brand-yellow origin-left"
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] leading-relaxed text-muted max-w-[520px] mx-auto"
      >
        {subtext}
      </motion.p>
    </motion.div>
  )
}
