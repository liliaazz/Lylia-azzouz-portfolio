import { useEffect, useRef } from 'react'
import type { ParticleConfig } from '@/types/hero.types'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  a: number
}

interface ParticleCanvasProps {
  config: ParticleConfig
}

export function ParticleCanvas({ config }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef  = useRef({ x: 0, y: 0 })
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0

    function resize() {
      W = canvas!.width  = window.innerWidth
      H = canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    // Init particles
    const particles: Particle[] = Array.from({ length: config.count }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      r:  config.size.min + Math.random() * (config.size.max - config.size.min),
      a:  config.opacity.min + Math.random() * (config.opacity.max - config.opacity.min),
    }))

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      const { x: mx, y: my } = mouseRef.current

      for (const p of particles) {
        p.x += p.vx + (mx - W / 2) * 0.000035
        p.y += p.vy + (my - H / 2) * 0.000035
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${config.color},${p.a})`
        ctx!.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [config])

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  )
}
