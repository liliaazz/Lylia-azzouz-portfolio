import { useRef, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { magneticSpring } from '@/animations/springs'

export function useMagneticEffect(strength = 0.25) {
  const ref = useRef<HTMLElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, magneticSpring)
  const y = useSpring(rawY, magneticSpring)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx   = rect.left + rect.width  / 2
      const cy   = rect.top  + rect.height / 2
      rawX.set((e.clientX - cx) * strength)
      rawY.set((e.clientY - cy) * strength)
    }

    const handleMouseLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    el.addEventListener('mousemove',  handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove',  handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [rawX, rawY, strength])

  return { ref, x, y }
}
