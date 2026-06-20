import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ExperienceBoard } from '@/components/things-built/ExperienceBoard'
import {
  THINGS_BUILT_HEADER,
  STORY_CARDS,
  SKILL_GROUPS,
  LANGUAGES,
} from '@/constants/things-built.constants'

function SectionHeader() {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <motion.div ref={ref} className="text-center mb-16">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B8941F] mb-3"
      >
        {THINGS_BUILT_HEADER.label}
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-tight text-ink mb-4 leading-[1.1]"
      >
        Learning by{' '}
        <span className="relative inline-block">
          Building.
          {/* Wobbly yellow underline */}
          <motion.svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 200 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            preserveAspectRatio="none"
            height="8"
          >
            <motion.path
              d="M0 6 Q25 1 50 5 Q75 9 100 5 Q125 1 150 5 Q175 9 200 5"
              fill="none"
              stroke="#F5C842"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </motion.svg>
        </span>
      </motion.h2>

      {/* Yellow underline accent */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-brand-yellow origin-left"
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] leading-relaxed text-muted max-w-[520px] mx-auto"
      >
        {THINGS_BUILT_HEADER.subtext}
      </motion.p>
    </motion.div>
  )
}

export function ThingsBuiltSection() {
  return (
    <section
      id="things-built"
      aria-label="Things I've Built"
      className="relative w-full overflow-hidden py-28 px-6"
      style={{
        background: [
          'radial-gradient(ellipse 700px 500px at 80% 10%,  rgba(245,200,66,0.09) 0%, transparent 60%)',
          'radial-gradient(ellipse 500px 400px at 10% 80%,  rgba(245,200,66,0.07) 0%, transparent 60%)',
          'radial-gradient(ellipse 400px 300px at 50% 50%,  rgba(59,130,246,0.03) 0%, transparent 60%)',
          '#FAFBF6',
        ].join(', '),
      }}
    >
      {/* Subtle paper-texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\'%3E%3Crect width=\'4\' height=\'4\' fill=\'%23000\'/%3E%3Crect x=\'0\' y=\'0\' width=\'1\' height=\'1\' fill=\'%23fff\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader />
        <ExperienceBoard
          cards={STORY_CARDS}
          skillGroups={SKILL_GROUPS}
          languages={LANGUAGES}
        />
      </div>
    </section>
  )
}
