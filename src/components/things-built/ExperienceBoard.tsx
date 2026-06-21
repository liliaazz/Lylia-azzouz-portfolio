import { StoryCard } from './StoryCard'
import type { StoryCardData, SkillGroup, Language } from '@/types/things-built.types'

interface ExperienceBoardProps {
  cards:       StoryCardData[]
  skillGroups: SkillGroup[]
  languages:   Language[]
}

/**
 * Three-column masonry-like board.
 * Large cards span 2 columns. Small cards span 1.
 * Cards are distributed top-to-bottom across columns to keep heights balanced.
 */
export function ExperienceBoard({ cards, skillGroups, languages }: ExperienceBoardProps) {
  // Assign a subtle organic tilt to each card so they feel hand-placed
  const tilts: Record<string, number> = {
    datathon:   -0.8,
    nasa:        0.6,
    'ar-game':  -1.2,
    volunteer:   0.9,
    languages:  -0.5,
    skills:      0.4,
  }

  // Split into columns: [left, center, right]
  const left:   StoryCardData[] = []
  const center: StoryCardData[] = []
  const right:  StoryCardData[] = []

  cards.forEach((card) => {
    if (card.size === 'large') {
      // Distribute large cards across all three columns
      if (left.length <= center.length && left.length <= right.length)  left.push(card)
      else if (center.length <= right.length)                            center.push(card)
      else                                                               right.push(card)
    } else {
      // Small/medium go to whichever column is shorter
      if (left.length <= center.length && left.length <= right.length)  left.push(card)
      else if (center.length <= right.length)                            center.push(card)
      else                                                               right.push(card)
    }
  })

  const renderColumn = (col: StoryCardData[], baseDelay: number) =>
    col.map((card, i) => (
      <StoryCard
        key={card.id}
        card={card}
        delay={baseDelay + i * 0.12}
        skillGroups={skillGroups}
        languages={languages}
        tilt={tilts[card.id] ?? 0}
      />
    ))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
      <div className="flex flex-col gap-5">{renderColumn(left,   0)}</div>
      <div className="flex flex-col gap-5 md:mt-8">{renderColumn(center, 0.08)}</div>
      <div className="flex flex-col gap-5">{renderColumn(right,  0.16)}</div>
    </div>
  )
}
