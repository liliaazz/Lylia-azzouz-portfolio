import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface SectionHeaderProps {
  label:   string
  heading: string
  subtext: string
}

export function SectionHeader({ label, heading, subtext }: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.35 })

  return (
    <motion.div ref={ref} className="text-center mb-20">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B8941F] mb-3"
      >
        {label}
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(26px,3.6vw,46px)] font-extrabold tracking-tight text-ink leading-[1.12] mb-4 max-w-[600px] mx-auto"
      >
        Technology Becomes More Meaningful{' '}
        <span className="text-[#B8941F]">When Shared</span>
      </motion.h2>

      {/* Yellow bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-5 h-[3px] w-14 rounded-full bg-brand-yellow origin-left"
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] leading-relaxed text-muted max-w-[500px] mx-auto"
      >
        {subtext}
      </motion.p>
    </motion.div>
  )
}
