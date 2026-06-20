import { motion } from 'framer-motion'
import { fadeInVariant } from '@/animations/variants'
import { PhotoFrame } from './PhotoFrame'
import type { HeroRightProps } from '@/types/hero.types'

export function HeroRight({
  imageSrc,
  imageAlt,
  name,
  location,
  availability,
  badges,
}: HeroRightProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center relative py-16 pl-8"
    >
      {/* Subtle yellow spotlight behind the photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,200,66,0.07) 0%, transparent 70%)',
        }}
      />

      <PhotoFrame
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        name={name}
        location={location}
        availability={availability}
        badges={badges}
      />
    </motion.div>
  )
}
