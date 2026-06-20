import type {
  HeadlineWord,
  Role,
  Stat,
  IdentityBadge,
  FloatingCard,
  CTAButton,
  ParticleConfig,
} from '@/types/hero.types'

// ─────────────────────────────────────────────────────────────
// Copy
// ─────────────────────────────────────────────────────────────

export const GREETING = 'Hi, this is Lylia.'

export const HEADLINE_WORDS: HeadlineWord[] = [
  { text: 'Building',    accent: 'none'   },
  { text: 'Intelligent', accent: 'yellow' },
  { text: 'Systems',     accent: 'none'   },
  { text: 'For',         accent: 'none'   },
  { text: 'A',           accent: 'none'   },
  { text: 'Connected',   accent: 'blue'   },
  { text: 'Future.',     accent: 'none'   },
]

export const SUBHEADLINE =
  'I combine Artificial Intelligence, Telecommunications, and Technology Leadership to create solutions that solve meaningful problems and shape the future.'

export const ROLES: Role[] = [
  { label: 'AI Engineer'               },
  { label: 'Telecommunications Engineer'},
  { label: 'AI Mentor'                 },
  { label: 'Technical Leader'          },
  { label: 'Future Founder'            },
]

export const STATS: Stat[] = [
  { value: '1',   suffix: '+', label: 'Years in AI'        },
  { value: '3',  suffix: '+', label: 'Projects Built'     },
  { value: '30', suffix: '+', label: 'Students Mentored'  },
]

export const CTA_BUTTONS: CTAButton[] = [
  { label: 'Explore My Work', variant: 'primary',   href: '#work',   showArrow: true },
  { label: 'My Vision',       variant: 'yellow',    href: '#vision', showArrow: false },
]

// ─────────────────────────────────────────────────────────────
// Photo area
// ─────────────────────────────────────────────────────────────

export const PHOTO_META = {
  name:         'Lylia',
  location:     'Algeria · AI Engineer',
  availability: 'Open to collab',
  imageAlt:     'Lylia — AI & Telecom Engineer',
}

// ─────────────────────────────────────────────────────────────
// Identity badges
// ─────────────────────────────────────────────────────────────

export const IDENTITY_BADGES: IdentityBadge[] = [
  {
    id:             'ai-engineer',
    label:          'AI Engineer',
    icon:           '⚡',
    colorClass:     'blue',
    animationDelay: 0,
    position:       { top: '-20px', right: '-28px' },
  },
  {
    id:             'telecom',
    label:          'Telecom Eng.',
    icon:           '📡',
    colorClass:     'yellow',
    animationDelay: 0.8,
    position:       { bottom: '80px', right: '-36px' },
  },
  {
    id:             'mentor',
    label:          'AI Mentor',
    icon:           '🌱',
    colorClass:     'green',
    animationDelay: 1.6,
    position:       { top: '80px', left: '-44px' },
  },
  {
    id:             'founder',
    label:          'Future Founder',
    icon:           '🚀',
    colorClass:     'navy',
    animationDelay: 2.4,
    position:       { bottom: '-18px', left: '-20px' },
  },
]

// ─────────────────────────────────────────────────────────────
// Mission floating card (only one card now)
// ─────────────────────────────────────────────────────────────

export const MISSION_CARD: FloatingCard = {
  id:             'mission',
  title:          'Mission',
  body:           '"Building technology that creates impact at scale."',
  animationDelay: 2.2,
  position:       { right: '2%', top: '18%' },
}

// ─────────────────────────────────────────────────────────────
// Particle config
// ─────────────────────────────────────────────────────────────

export const PARTICLE_CONFIG: ParticleConfig = {
  count:   55,
  color:   '59,130,246',
  speed:   0.08,
  size:    { min: 0.7, max: 1.6 },
  opacity: { min: 0.06, max: 0.18 },
}

// ─────────────────────────────────────────────────────────────
// Role rotator interval
// ─────────────────────────────────────────────────────────────

export const ROLE_INTERVAL_MS = 2800
