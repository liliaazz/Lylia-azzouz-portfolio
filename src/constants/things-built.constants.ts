import type {
  StoryCardData,
  SkillGroup,
  Language,
} from '@/types/things-built.types'

export const THINGS_BUILT_HEADER = {
  label:   'WHAT I\'VE BEEN BUILDING',
  heading: 'Learning by Building.',
  subtext:
    'Some experiences taught me through code, some through leadership, and some through collaboration. Each one helped me grow as an engineer, mentor, and problem solver.',
}

export const STORY_CARDS: StoryCardData[] = [
  {
    id:          'datathon',
    category:    'Artificial Intelligence',
    title:       'Forsatic Datathon',
    description:
      'Worked on processing and analyzing more than 15,000 multilingual comments in Arabic, French, and English. Explored data cleaning, NLP workflows, and machine learning models.',
    highlights:  [
      { text: '15,000+ comments processed' },
      { text: 'Multilingual datasets'      },
      { text: 'AI for telecommunications'  },
    ],
    size:        'large',
    accent:      'blue',
    emoji:       '🧠',
    tags:        ['XGBoost', 'DziriBERT', 'NLP', 'Python'],
    decorative:  'data-stream',
  },
  {
    id:          'nasa',
    category:    'Innovation',
    title:       'NASA Space Apps Challenge',
    description:
      'Collaborated on an agriculture-focused simulation using NASA datasets to explore environmental and farming scenarios. Worked with weather and soil data inside Unity.',
    highlights:  [
      { text: 'NASA datasets'         },
      { text: 'Agriculture technology' },
      { text: 'Simulation systems'     },
    ],
    size:        'large',
    accent:      'yellow',
    emoji:       '🌍',
    tags:        ['Unity', 'NASA Data', 'Agriculture', 'Simulation'],
    decorative:  'terrain',
  },
  {
    id:          'ar-game',
    category:    'Extended Reality',
    title:       'Puzzle Cards AR Game',
    description:
      'Designed and developed an educational puzzle card experience in Unity using Augmented Reality technologies for World Learning Algeria.',
    highlights:  [
      { text: 'Unity'                   },
      { text: 'Augmented Reality'       },
      { text: 'Educational technology'  },
    ],
    size:        'medium',
    accent:      'purple',
    emoji:       '🃏',
    tags:        ['Unity', 'AR', 'EdTech'],
    decorative:  'puzzle',
  },
  {
    id:          'volunteer',
    category:    'Community',
    title:       'Volunteer Experiences',
    description:
      'Participated in events as an exhibitor at CTO FORUM, GLOBAL AFRICA TECH, and contributed to community initiatives focused on technology, education, and youth development with world learning.',
    highlights:  [
      { text: 'Teamwork'      },
      { text: 'Leadership'    },
      { text: 'Event support' },
    ],
    size:        'medium',
    accent:      'green',
    emoji:       '🤝',
    tags:        ['Mentoring', 'Leadership', 'Community'],
    decorative:  'people',
  },
  {
    id:          'languages',
    category:    'Communication',
    title:       'Languages',
    description:
      'Comfortable working across multiple languages and multicultural environments.',
    highlights:  [],
    size:        'small',
    accent:      'yellow',
    emoji:       '🗣️',
    decorative:  'languages',
  },
  {
    id:          'skills',
    category:    'Skills',
    title:       'Technology Toolbox',
    description: 'Tools, technologies, and frameworks I work with.',
    highlights:  [],
    size:        'large',
    accent:      'yellow',
    emoji:       '⚙️',
    decorative:  'skills',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id:     'ai',
    label:  'Artificial Intelligence',
    accent: 'blue',
    skills: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'DziriBERT'],
  },
  {
    id:     'dev',
    label:  'Development',
    accent: 'yellow',
    skills: ['React', 'TypeScript', 'JavaScript', 'Python'],
  },
  {
    id:     'telecom',
    label:  'Telecommunications',
    accent: 'purple',
    skills: ['Routing', 'Switching', 'VLAN', 'ACL', 'VSAT'],
  },
]

export const LANGUAGES: Language[] = [
  { name: 'Arabic',  level: 'Native',       flag: '🇩🇿' },
  { name: 'French',  level: 'Professional', flag: '🇫🇷' },
  { name: 'English', level: 'Professional', flag: '🇬🇧' },
]
