export type MilestoneAccent = 'blue' | 'yellow'

export interface Milestone {
  id: string
  index: number
  title: string
  description: string
  icon: string
  accent: MilestoneAccent
  special?: boolean
  year?: string
}

export interface JourneyEndingData {
  title: string
  description: string
}
