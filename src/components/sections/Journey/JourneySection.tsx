import { JourneySectionHeader } from './JourneySectionHeader'
import { JourneyPath }          from './JourneyPath'
import { JourneyEnding }        from './JourneyEnding'
import {
  JOURNEY_HEADER,
  MILESTONES,
  JOURNEY_ENDING,
} from '@/constants/journey.constants'

export function JourneySection() {
  return (
    <section
      id="journey"
      aria-label="My Journey"
      className="relative w-full overflow-hidden bg-[#F7F9FC] py-28 px-6"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 600px 400px at 10% 30%, rgba(59,130,246,0.04) 0%, transparent 70%)',
            'radial-gradient(ellipse 500px 400px at 90% 70%, rgba(245,200,66,0.06) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <JourneySectionHeader
          label={JOURNEY_HEADER.label}
          heading={JOURNEY_HEADER.heading}
          subtext={JOURNEY_HEADER.subtext}
        />

        {/* Path + milestones */}
        <JourneyPath milestones={MILESTONES} />

        {/* Spacer between last milestone and ending */}
        <div className="mt-16" />

        {/* Final destination */}
        <JourneyEnding data={JOURNEY_ENDING} />
      </div>
    </section>
  )
}
