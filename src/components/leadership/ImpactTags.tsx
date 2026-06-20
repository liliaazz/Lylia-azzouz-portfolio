import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import type { ImpactTag } from '@/types/leadership.types'
import clsx from 'clsx'

interface ImpactTagsProps {
  tags: ImpactTag[]
}

const tagColors = [
  'bg-brand-yellow/20 text-[#7A5F00]   border-brand-yellow/30  hover:bg-brand-yellow   hover:text-[#5A4300]',
  'bg-brand-blue/10   text-blue-700    border-brand-blue/20    hover:bg-brand-blue     hover:text-white',
  'bg-purple-50       text-purple-700  border-purple-200       hover:bg-purple-600     hover:text-white',
  'bg-green-50        text-green-700   border-green-200        hover:bg-green-600      hover:text-white',
  'bg-rose-50         text-rose-700    border-rose-200         hover:bg-rose-500       hover:text-white',
  'bg-orange-50       text-orange-700  border-orange-200       hover:bg-orange-500     hover:text-white',
]

export function ImpactTags({ tags }: ImpactTagsProps) {
  const [active, setActive] = useState<string | null>(null)
  const { ref, inView }     = useInView({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="mt-20 text-center"
    >
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold tracking-[0.12em] uppercase text-muted mb-2"
      >
        What These Experiences Taught Me
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mb-6 h-px w-12 bg-brand-yellow origin-left"
      />

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, i) => {
          const colorClass = tagColors[i % tagColors.length]
          const isActive   = active === tag.label

          return (
            <motion.button
              key={tag.label}
              initial={{ opacity: 0, scale: 0.82, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(isActive ? null : tag.label)}
              className={clsx(
                'px-4 py-2 rounded-full border',
                'text-[12px] font-semibold cursor-pointer',
                'transition-all duration-200',
                colorClass,
                isActive && 'ring-2 ring-offset-2 ring-brand-yellow/50',
              )}
            >
              {tag.label}
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
