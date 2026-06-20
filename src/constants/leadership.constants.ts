import type { ExperienceNodeData, ImpactTag } from '@/types/leadership.types'

export const LEADERSHIP_HEADER = {
  label:   'COMMUNITY & LEADERSHIP',
  heading: 'More Than Technical Skills',
  subtext:
    'Some of my most rewarding experiences have come from teaching, mentoring, organizing events, and helping others discover what they can build.',
}

export const EXPERIENCE_NODES: ExperienceNodeData[] = [
  {
    id:          'future-tech-club',
    title:       'Future Tech Club',
    role:        'IT Manager',
    description:
      'Helped organize technical activities, workshops, and community initiatives while supporting the club\'s technology and event operations.',
    highlights:  ['Organized IT workshops', 'Organized Hogwarts hack online', 'Worked with multidisciplinary teams'],
    accent:      'yellow',
    col:         0,
    row:         0,
  },
  {
    id:          'micro-club',
    title:       'Micro Club',
    role:        'Development Member',
    description:
      'part of both the AI and Web Dev teams gave me the opportunity to attend exclusive technical sessions, collaborate on diverse projects. It also allowed me to participate in an ideathon and a hackathon, gaining valuable experience in innovation and teamwork.',
    accent:      'blue',
    col:         1,
    row:         0,
  },
  {
    id:          'world-learning',
    title:       'World Learning Algeria',
    role:        'STEAM Mentor',
    description:
      'Guided students through hands-on learning in science, technology, engineering, arts, and mathematics — encouraging creativity and problem solving.',
    highlights:  ['Student mentorship', 'STEAM activities', 'Learning through projects'],
    accent:      'yellow',
    col:         2,
    row:         0,
  },
  {
    id:          'ai-forge-journey',
    title:       'AI Forge',
    role:        'Student → Mentor',
    description:
      'Started as a learner exploring Artificial Intelligence and later became a mentor helping students understand AI concepts, complete projects, and build confidence in technology.',
    accent:      'gold',
    special:     true,
    note:        'The journey from student to mentor',
    col:         0,
    row:         1,
  },
  {
    id:          'ai-forge-mentor',
    title:       'AI Forge',
    role:        'AI Mentor',
    description:
      'Mentored students through AI learning paths, project development, and practical implementation.',
    highlights:  ['AI education', 'Mentorship', 'Curriculum design', 'Student guidance'],
    accent:      'yellow',
    note:        'Sponsored by Boeing and World Learning.',
    col:         1,
    row:         1,
  },
  {
    id:          'hackathon',
    title:       'Hogwarts Online Hackathon',
    role:        'Organizer',
    description:
      'Co-organized and managed an online hackathon that brought together students and builders to create innovative projects.',
    highlights:  ['49 participants', '6 final projects', 'Event coordination', 'Team management'],
    accent:      'blue',
    col:         2,
    row:         1,
  },
  {
    id:          'algerie-telecom',
    title:       'Algérie Télécom',
    role:        'Network Infrastructure Intern',
    description:
      'Gained practical experience in networking, VLANs, routing, switching, and troubleshooting in a professional telecommunications environment.',
    accent:      'blue',
    col:         0,
    row:         2,
  },
  {
    id:          'algerie-satellite',
    title:       'Algérie Télécom Satellite',
    role:        'Satellite Communications Intern',
    description:
      'Explored VSAT systems, satellite communication infrastructure, and large-scale network operations.',
    accent:      'yellow',
    col:         1,
    row:         2,
  },
]

export const IMPACT_TAGS: ImpactTag[] = [
  { label: 'Leadership'          },
  { label: 'Communication'       },
  { label: 'Mentorship'          },
  { label: 'Teamwork'            },
  { label: 'Problem Solving'     },
  { label: 'Continuous Learning' },
]
