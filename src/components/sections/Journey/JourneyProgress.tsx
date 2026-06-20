import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface JourneyProgressProps {
  /** Number of milestones (used to size connector dots) */
  count: number
}

export function JourneyProgress({ count }: JourneyProgressProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target:  trackRef,
    offset:  ['start 80%', 'end 20%'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping:   20,
    restDelta: 0.001,
  })

  // Scale the fill line from 0% to 100% height as you scroll
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <div
      ref={trackRef}
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] pointer-events-none"
      aria-hidden="true"
    >
      {/* Track (unfilled) */}
      <div className="absolute inset-0 bg-[rgba(26,46,74,0.08)] rounded-full" />

      {/* Fill (scroll-driven) */}
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top rounded-full"
        style={{
          scaleY,
          background: 'linear-gradient(to bottom, #3B82F6 0%, #F5C842 50%, #3B82F6 100%)',
          height: '100%',
        }}
      />

      {/* Connector dots at each milestone position */}
      {Array.from({ length: count }).map((_, i) => {
        const pct = i / (count - 1)
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{
              top:        `calc(${pct * 100}%)`,
              background: i % 2 === 0 ? '#3B82F6' : '#F5C842',
              opacity: useTransform(smoothProgress, [pct - 0.1, pct], [0.2, 1]),
              scale:   useTransform(smoothProgress, [pct - 0.1, pct], [0.6, 1]),
            }}
          />
        )
      })}
    </div>
  )
}
