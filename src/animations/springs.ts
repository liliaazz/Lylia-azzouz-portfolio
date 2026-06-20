import type { SpringOptions } from 'framer-motion'

export const gentleSpring: SpringOptions = {
  stiffness: 260,
  damping: 24,
  mass: 1,
}

export const snappySpring: SpringOptions = {
  stiffness: 380,
  damping: 22,
  mass: 0.8,
}

export const magneticSpring: SpringOptions = {
  stiffness: 300,
  damping: 26,
  mass: 1,
}

export const floatSpring: SpringOptions = {
  stiffness: 120,
  damping: 18,
  mass: 1.2,
}
