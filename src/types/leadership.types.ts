export type NodeAccent = 'yellow' | 'blue' | 'gold'

export interface ExperienceNodeData {
  id: string
  title: string
  role: string
  description: string
  highlights?: string[]
  accent: NodeAccent
  special?: boolean
  note?: string
  /** which column in the network grid: 0 | 1 | 2 */
  col: 0 | 1 | 2
  /** row position (used for vertical ordering within a column) */
  row: number
}

export interface ImpactTag {
  label: string
}
