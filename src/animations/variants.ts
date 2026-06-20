import type { Variants } from 'framer-motion'

// ─────────────────────────────────────────────────────────────
// Entrance variants
// ─────────────────────────────────────────────────────────────

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInVariant: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const wordVariant: Variants = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
}

export const containerVariant: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.085, delayChildren: 0.3 },
  },
}

// ─────────────────────────────────────────────────────────────
// Role transition variants
// ─────────────────────────────────────────────────────────────

export const roleVariant: Variants = {
  enter: {
    opacity: 0,
    y: -6,
    filter: 'blur(4px)',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  center: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 6,
    filter: 'blur(4px)',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─────────────────────────────────────────────────────────────
// Badge float variants
// ─────────────────────────────────────────────────────────────

export const badgeEntranceVariant: Variants = {
  hidden:  { opacity: 0, scale: 0.85, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─────────────────────────────────────────────────────────────
// Photo frame entrance
// ─────────────────────────────────────────────────────────────

export const photoFrameVariant: Variants = {
  hidden:  { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
}

// ─────────────────────────────────────────────────────────────
// Floating card entrance
// ─────────────────────────────────────────────────────────────

export const floatingCardVariant: Variants = {
  hidden:  { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─────────────────────────────────────────────────────────────
// Left panel stagger container
// ─────────────────────────────────────────────────────────────

export const leftPanelVariant: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const leftItemVariant: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
