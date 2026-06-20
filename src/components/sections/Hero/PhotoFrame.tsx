import { motion } from 'framer-motion'
import { photoFrameVariant } from '@/animations/variants'
import { IdentityBadge } from './IdentityBadge'
import type { PhotoFrameProps } from '@/types/hero.types'

export function PhotoFrame({
  imageSrc,
  imageAlt,
  name,
  location,
  availability,
  badges,
}: PhotoFrameProps) {
  return (
    <motion.div
      variants={photoFrameVariant}
      initial="hidden"
      animate="visible"
      className="relative w-[300px] h-[360px] flex-shrink-0"
    >
      {/* ── Layer 3: outermost rotated card ── */}
      <div
        className="absolute rounded-[28px] border"
        style={{
          inset: '-16px -16px 16px -16px',
          background:
            'linear-gradient(135deg, rgba(245,200,66,0.12), rgba(59,130,246,0.08))',
          borderColor: 'rgba(245,200,66,0.22)',
          transform: 'rotate(-4deg)',
        }}
      />

      {/* ── Layer 2: middle rotated card ── */}
      <div
        className="absolute rounded-[26px] border"
        style={{
          inset: '-8px -8px 8px -8px',
          background:
            'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(245,200,66,0.06))',
          borderColor: 'rgba(59,130,246,0.16)',
          transform: 'rotate(-1.5deg)',
        }}
      />

      {/* ── Layer 1: main photo container ── */}
      <div
        className="relative z-[3] w-full h-full rounded-[22px] overflow-hidden"
        style={{
          border: '1px solid rgba(26,46,74,0.10)',
          boxShadow:
            '0 24px 64px rgba(26,46,74,0.14), 0 4px 16px rgba(26,46,74,0.08)',
        }}
      >
        {imageSrc ? (
          /* ── Real portrait ── */
          <img
            src={imageSrc}
            alt={imageAlt ?? name}
            className="w-full h-full object-cover object-top block"
            draggable={false}
          />
        ) : (
          /* ── Placeholder ── */
          <div
            className="w-full h-full flex flex-col items-center justify-end pb-7 relative overflow-hidden"
            style={{
              background:
                'linear-gradient(160deg,#E8F0F8 0%,#D4E4F4 40%,#C8DDF0 70%,#BDD6EC 100%)',
            }}
          >
            {/* Silhouette head */}
            <div
              className="absolute top-6 left-1/2 -translate-x-1/2 w-[70px] h-[70px] rounded-full opacity-60"
              style={{
                background: 'linear-gradient(145deg,#C2D5E8,#A8C4DC)',
              }}
            />
            {/* Silhouette body */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[280px] opacity-45"
              style={{
                background: 'linear-gradient(180deg,#B8CDE0 0%,#9DB8D4 100%)',
                borderRadius: '50% 50% 0 0 / 40% 40% 0 0',
              }}
            />
            <span className="relative z-10 text-[11px] font-semibold tracking-[0.06em] uppercase text-[rgba(26,46,74,0.45)]">
              Your Portrait Here
            </span>
          </div>
        )}

        {/* ── Glass name strip ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[4] flex items-center justify-between px-4 py-[14px]"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.6)',
          }}
        >
          <div>
            <p className="text-[13px] font-bold text-ink leading-none mb-[3px]">{name}</p>
            <p className="text-[11px] font-medium text-muted">{location}</p>
          </div>
          <div className="flex items-center gap-[5px]">
            <span
              className="w-[6px] h-[6px] rounded-full bg-green-500"
              style={{ animation: 'avPulse 2s ease-in-out infinite' }}
            />
            <span className="text-[10.5px] font-semibold text-green-700">
              {availability}
            </span>
          </div>
        </div>
      </div>

      {/* ── Floating identity badges ── */}
      {badges.map((badge, i) => (
        <IdentityBadge key={badge.id} {...badge} index={i} />
      ))}
    </motion.div>
  )
}
