// ─────────────────────────────────────────────────────────────
// Hero Section — TypeScript Interfaces
// ─────────────────────────────────────────────────────────────

export interface HeadlineWord {
  text: string
  accent: 'yellow' | 'blue' | 'none'
}

export interface Role {
  label: string
}

export interface Stat {
  value: string
  suffix: string
  label: string
}

export interface IdentityBadge {
  id: string
  label: string
  icon: string
  colorClass: 'blue' | 'yellow' | 'green' | 'navy'
  animationDelay: number
  position: BadgePosition
}

export interface BadgePosition {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export interface FloatingCard {
  id: string
  title: string
  body: string
  animationDelay: number
  position: FloatingCardPosition
}

export interface FloatingCardPosition {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export interface CTAButton {
  label: string
  variant: 'primary' | 'secondary' | 'yellow'
  href: string
  showArrow?: boolean
}

export interface MagneticButtonProps {
  label: string
  variant: 'primary' | 'yellow' | 'secondary'
  href?: string
  showArrow?: boolean
  onClick?: () => void
}

export interface IdentityBadgeProps extends IdentityBadge {
  index: number
}

export interface PhotoFrameProps {
  imageSrc?: string
  imageAlt?: string
  name: string
  location: string
  availability: string
  badges: IdentityBadge[]
}

export interface RoleRotatorProps {
  roles: Role[]
  intervalMs?: number
}

export interface HeroLeftProps {
  greeting: string
  headlineWords: HeadlineWord[]
  subheadline: string
  roles: Role[]
  stats: Stat[]
  buttons: CTAButton[]
}

export interface HeroRightProps {
  imageSrc?: string
  imageAlt?: string
  name: string
  location: string
  availability: string
  badges: IdentityBadge[]
  missionCard: FloatingCard
}

export interface ParticleConfig {
  count: number
  color: string
  speed: number
  size: { min: number; max: number }
  opacity: { min: number; max: number }
}
