import { useEffect, useRef, useState } from 'react'

/**
 * Returns a 0–1 progress value representing how far the user
 * has scrolled through the referenced element.
 */
export function useScrollProgress() {
  const ref      = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect   = el.getBoundingClientRect()
      const total  = rect.height - window.innerHeight
      const scrolled = -rect.top
      setProgress(Math.min(1, Math.max(0, scrolled / total)))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return { ref, progress }
}
