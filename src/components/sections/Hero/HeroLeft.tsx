import { motion } from 'framer-motion'
import { leftPanelVariant, leftItemVariant, wordVariant, containerVariant } from '@/animations/variants'
import { RoleRotator }    from './RoleRotator'
import { MagneticButton } from './MagneticButton'
import type { HeroLeftProps } from '@/types/hero.types'
import clsx from 'clsx'

export function HeroLeft({
  greeting,
  headlineWords,
  subheadline,
  roles,
  stats,
  buttons,
}: HeroLeftProps) {
  return (
    <motion.div
      variants={leftPanelVariant}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center pr-12 xl:pr-16 relative z-10"
    >
      {/* ── Greeting ── */}
      <motion.div
        variants={leftItemVariant}
        className="flex items-center gap-[10px] text-[12.5px] font-medium text-muted mb-[6px]"
      >
        <span className="w-[22px] h-px bg-[rgba(26,46,74,0.2)]" />
        {greeting}
      </motion.div>

      {/* ── Role rotator ── */}
      <motion.div variants={leftItemVariant}>
        <RoleRotator roles={roles} />
      </motion.div>

      {/* ── Headline ── */}
      <motion.h1
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="font-extrabold leading-[1.11] tracking-[-0.025em] text-ink mb-4"
        style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}
        aria-label={headlineWords.map(w => w.text).join(' ')}
      >
        {headlineWords.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            className={clsx(
              'inline-block mr-[0.22em]',
              word.accent === 'yellow' && 'text-[#B8941F]',
              word.accent === 'blue'   && 'text-brand-blue',
            )}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.h1>

      {/* ── Subheadline ── */}
      <motion.p
        variants={leftItemVariant}
        className="text-[14.5px] leading-[1.80] text-muted font-normal max-w-[420px] mb-8"
      >
        {subheadline}
      </motion.p>

      {/* ── CTA Buttons ── */}
      <motion.div
        variants={leftItemVariant}
        className="flex gap-[10px] flex-wrap mb-11"
      >
        {buttons.map(btn => (
          <MagneticButton
            key={btn.label}
            label={btn.label}
            variant={btn.variant}
            href={btn.href}
            showArrow={btn.showArrow}
          />
        ))}
      </motion.div>

      {/* ── Stats ── */}
      <motion.div
        variants={leftItemVariant}
        className="flex gap-8 pt-7 border-t border-[rgba(26,46,74,0.08)]"
      >
        {stats.map(stat => (
          <div key={stat.label}>
            <p className="text-[20px] font-extrabold text-navy leading-none mb-[3px]">
              {stat.value}
              <span className="text-[#B8941F]">{stat.suffix}</span>
            </p>
            <p className="text-[11px] font-medium text-muted tracking-[0.04em]">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
