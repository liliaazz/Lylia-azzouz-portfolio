import { useState } from 'react'
import { motion } from 'framer-motion'

export function ResumeCard() {
  const [clicked, setClicked] = useState(false)

  const handleDownload = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
    // Replace '/lylia-cv.pdf' with the real CV path when available
    const a = document.createElement('a')
    a.href = '/lylia-cv.pdf'
    a.download = 'Lylia_Azzouz_CV.pdf'
    a.click()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        boxShadow: '0 16px 44px rgba(245,200,66,0.22)',
        transition: { type: 'spring', stiffness: 280, damping: 22 },
      }}
      className="relative bg-white/92 backdrop-blur-sm
                 border border-brand-yellow/30 rounded-2xl overflow-hidden
                 shadow-[0_4px_20px_rgba(245,200,66,0.12)]"
    >
      {/* Gradient top bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-yellow to-[#E6A800]" />

      {/* Decorative corner dot grid */}
      <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-[0.12] pointer-events-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-brand-yellow" />
        ))}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {/* Document icon */}
          <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#B8941F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div>
            <p className="text-[14px] font-extrabold text-ink leading-tight mb-0.5">Resume</p>
            <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#B8941F]">
              CV · 2024
            </p>
          </div>
        </div>

        <p className="text-[12px] leading-relaxed text-muted mb-4">
          A complete overview of my education, projects, leadership experiences, and technical background.
        </p>

        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2
                     bg-brand-yellow text-[#5A4300] font-bold text-[13px]
                     py-2.5 rounded-xl cursor-pointer
                     shadow-[0_2px_10px_rgba(245,200,66,0.30)]
                     hover:shadow-[0_6px_20px_rgba(245,200,66,0.42)]
                     transition-shadow duration-200"
        >
          {clicked ? (
            <>✓ Downloading...</>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}
