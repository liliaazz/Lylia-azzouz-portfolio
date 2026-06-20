import { motion } from 'framer-motion'
import type { Language } from '@/types/things-built.types'

interface LanguageCardProps {
  languages: Language[]
}

export function LanguageCard({ languages }: LanguageCardProps) {
  return (
    <div className="flex flex-col gap-3 mt-2">
      {languages.map((lang, i) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ x: 4 }}
          className="flex items-center justify-between
                     bg-white/70 border border-[rgba(26,46,74,0.08)]
                     rounded-xl px-4 py-2.5 cursor-default"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xl leading-none">{lang.flag}</span>
            <span className="text-[13px] font-bold text-ink">{lang.name}</span>
          </div>
          <span className="text-[10px] font-semibold tracking-wide uppercase
                           text-[#B8941F] bg-brand-yellow/15 px-2 py-0.5 rounded-full">
            {lang.level}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
