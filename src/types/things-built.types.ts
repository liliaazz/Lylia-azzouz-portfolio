export type CardSize = 'large' | 'medium' | 'small'
export type CardAccent = 'yellow' | 'blue' | 'green' | 'purple'

export interface StoryHighlight {
  text: string
}

export interface StoryCardData {
  id: string
  category: string
  title: string
  description: string
  highlights: StoryHighlight[]
  size: CardSize
  accent: CardAccent
  emoji: string
  tags?: string[]
  /** Optional decorative element key */
  decorative?: 'data-stream' | 'puzzle' | 'terrain' | 'people' | 'languages' | 'skills'
}

export interface SkillGroup {
  id: string
  label: string
  accent: CardAccent
  skills: string[]
}

export interface Language {
  name: string
  level: string
  flag: string
}
