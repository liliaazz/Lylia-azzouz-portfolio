import type { Milestone, JourneyEndingData } from '@/types/journey.types'

export const JOURNEY_HEADER = {
  label:     'MY JOURNEY',
  heading:   'From Curiosity to Impact',
  subtext:
    'Every step taught me something new from understanding networks and infrastructure to mentoring future students and exploring artificial intelligence.',
}

export const MILESTONES: Milestone[] = [
  {
    id:          'ensticp',
    index:       0,
    title:       'ENSTICP',
    description:
      'Started my Telecommunications Engineering journey and discovered how communication systems, networks, and infrastructure connect the world.',
    icon:        '🔗',
    accent:      'blue',
    year:        '2023',
  },
  {
    id:          'future-tech-club',
    index:       1,
    title:       'Future Tech Club',
    description:
      'Joined FTC as a Web Member and collaborated with fellow students on technology projects, events, and workshops. Later, I was promoted to IT Manager, where I led technical initiatives and supported the clubs digital operations.',
    icon:        '🤝',
    accent:      'yellow',
    year:        '2023 - 2026',
  },
  {
    id:          'ai-forge-student',
    index:       2,
    title:       'AI Forge Student',
    description:
      'Began studying Artificial Intelligence through AI Forge and explored machine learning, problem solving, and real-world AI applications.',
    icon:        '✦',
    accent:      'blue',
    year:        '2025',
  },
  {
    id:          'steam-education',
    index:       3,
    title:       'Teacher Training & STEAM',
    description:
      'Learned how to teach technical concepts and guide students through hands-on learning in science, technology, engineering, arts, and mathematics.',
    icon:        '📖',
    accent:      'yellow',
    year:        '2025',
  },
  {
    id:          'ai-forge-mentor',
    index:       4,
    title:       'AI Forge Mentor',
    description:
      'Transitioned from student to mentor, helping learners understand AI concepts, complete projects, and build confidence in technology.',
    icon:        '🌟',
    accent:      'yellow',
    special:     true,
    year:        '2026',
  },
  {
    id:          'algerie-telecom',
    index:       5,
    title:       'Algérie Télécom Internship',
    description:
      'Gained practical experience with networking infrastructure, VLANs, routing, switching, and troubleshooting in a real telecommunications environment.',
    icon:        '🖧',
    accent:      'blue',
    year:        '2024',
  },
  {
    id:          'satellite-internship',
    index:       6,
    title:       'Satellite Communications',
    description:
      'Explored satellite communications, VSAT systems, and large-scale communication infrastructure beyond traditional terrestrial networks.',
    icon:        '📡',
    accent:      'yellow',
    year:        '2024',
  },
]

export const JOURNEY_ENDING: JourneyEndingData = {
  title:
    "What's Next?",
  description:
    'Continuing to explore Artificial Intelligence, telecommunications, education, and future technologies while building projects that create meaningful impact.',
}
