import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ContactGrid } from '@/components/contact/ContactGrid'
import {
  CONTACT_HEADER,
  CONTACT_PATHS,
  SOCIAL_CARDS,
} from '@/constants/contact.constants'

// ── Section header ────────────────────────────────────────────
function ContactHeader() {
  const { ref, inView } = useInView({ threshold: 0.35 })

  return (
    <motion.div ref={ref} className="text-center mb-16">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B8941F] mb-3"
      >
        {CONTACT_HEADER.label}
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-tight text-ink leading-[1.1] mb-4"
      >
        Let's Build Something{' '}
        <span className="text-[#B8941F]">Meaningful</span>
      </motion.h2>

      {/* Yellow bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.22 }}
        className="mx-auto mb-5 h-[3px] w-14 rounded-full bg-brand-yellow origin-left"
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="text-[15px] leading-relaxed text-muted max-w-[520px] mx-auto"
      >
        {CONTACT_HEADER.subtext}
      </motion.p>
    </motion.div>
  )
}

// ── Footer sign-off ───────────────────────────────────────────
function ContactSignOff() {
  const { ref, inView } = useInView({ threshold: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mt-20 pt-10 border-t border-[rgba(26,46,74,0.07)]"
    >
      <p className="text-[13px] text-muted mb-1">
        Made with curiosity, care, and a lot of{' '}
        <span className="text-[#B8941F] font-semibold">learning.</span>
      </p>
      <p className="text-[12px] text-muted/60">
        © {new Date().getFullYear()} Lylia Azzouz
      </p>
    </motion.div>
  )
}

// ── Root section ──────────────────────────────────────────────
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact — Let's Build Something Meaningful"
      className="relative w-full overflow-hidden py-28 px-6"
      style={{
        background: [
          'radial-gradient(ellipse 700px 500px at 20% 10%,  rgba(245,200,66,0.07) 0%, transparent 60%)',
          'radial-gradient(ellipse 500px 400px at 85% 80%,  rgba(245,200,66,0.06) 0%, transparent 60%)',
          'radial-gradient(ellipse 350px 350px at 60% 40%,  rgba(59,130,246,0.025) 0%, transparent 60%)',
          '#F8F9F5',
        ].join(', '),
      }}
    >
      {/* Floating decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 right-10 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #F5C842, transparent)' }}
        />
        <div
          className="absolute bottom-10 -left-16 w-60 h-60 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <ContactHeader />

        <ContactGrid
          paths={CONTACT_PATHS}
          socialCards={SOCIAL_CARDS}
          imageSrc={undefined} // Replace with '/assets/lylia.jpg' when available
        />

        <ContactSignOff />
      </div>
    </section>
  )
}
