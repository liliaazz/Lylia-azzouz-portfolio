import { JourneyMilestone } from './JourneyMilestone'
import { JourneyProgress }  from './JourneyProgress'
import type { Milestone }   from '@/types/journey.types'

interface JourneyPathProps {
  milestones: Milestone[]
}

export function JourneyPath({ milestones }: JourneyPathProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">

      {/* Central animated spine */}
      <JourneyProgress count={milestones.length} />

      {/* Milestones — alternating left / right */}
      <div className="relative flex flex-col gap-16 py-4">
        {milestones.map((milestone, i) => {
          const side = i % 2 === 0 ? 'left' : 'right'

          return (
            <div
              key={milestone.id}
              className={`flex w-full ${
                side === 'left'
                  ? 'justify-start pr-[calc(50%+24px)]'
                  : 'justify-end pl-[calc(50%+24px)]'
              }`}
            >
              <JourneyMilestone
                milestone={milestone}
                side={side}
                delay={0.1}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
