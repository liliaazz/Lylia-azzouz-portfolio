import type { ContactPathData, SocialCardData } from '@/types/contact.types'

export const CONTACT_HEADER = {
  label:   'FINAL CHAPTER',
  heading: "Let's Build Something Meaningful",
  subtext:
    "Whether it's artificial intelligence, telecommunications, education, research, community initiatives, or ambitious ideas, I'm always excited to connect with people who are building things that matter.",
}

export const CONTACT_PATHS: ContactPathData[] = [
  {
    id:          'opportunity',
    title:       'I Have An Opportunity',
    icon:        'rocket',
    description: 'Internships, collaborations, speaking opportunities, research projects, or exciting challenges.',
    links: [
      { platform: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/lylia-azzouz' },
      { platform: 'email',    label: 'Email',    href: 'mailto:azzouzlylia05@gmail.com'             },
    ],
  },
  {
    id:          'build-together',
    title:       "Let's Build Together",
    icon:        'puzzle',
    description: 'Startup ideas, AI projects, community initiatives, hackathons, and technology collaborations.',
    links: [
      { platform: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/lylia-azzouz' },
      { platform: 'github',   label: 'GitHub',   href: 'https://github.com/liliaazz'     },
    ],
  },
  {
    id:          'learn',
    title:       'I Want To Learn',
    icon:        'book',
    description: 'Questions about AI, telecommunications, mentoring, student communities, or personal growth.',
    links: [
      { platform: 'linkedin',  label: 'LinkedIn',  href: 'https://linkedin.com/in/lylia-azzouz'  },
      { platform: 'instagram', label: 'Instagram', href: 'https://instagram.com/lylia.azzouz'    },
    ],
  },
  {
    id:          'curious',
    title:       'Just Curious',
    icon:        'compass',
    description: 'Explore my work, follow my journey, and stay connected.',
    links: [
      
      { platform: 'github',    label: 'GitHub',    href: 'https://github.com/liliaazz'   },
    ],
  },
]

export const SOCIAL_CARDS: SocialCardData[] = [
  {
    platform: 'linkedin',
    label:    'LinkedIn',
    handle:   'lylia-azzouz',
    href:     'https://linkedin.com/in/lylia-azzouz',
    color:    '#0A66C2',
    bgColor:  'rgba(10,102,194,0.08)',
  },
  {
    platform: 'github',
    label:    'GitHub',
    handle:   'liliaazz',
    href:     'https://github.com/liliaazz',
    color:    '#1C2B1A',
    bgColor:  'rgba(28,43,26,0.07)',
  },
 
  {
    platform: 'email',
    label:    'Email',
    handle:   'azzouzlylia05@gmail.com',
    href:     'mailto:azzouzlylia05@gmail.com',
    color:    '#B8941F',
    bgColor:  'rgba(245,200,66,0.12)',
  },
]

export const PROFILE_ROLES = [
  'AI Engineer',
  'Telecom Engineer',
  'Mentor',
  'Builder',
  'Future Founder',
]

export const HIDDEN_INTERESTS = [
  'Artificial Intelligence',
  'Telecommunications',
  'Education',
  'Emerging Technologies',
  'Startups',
]
