import { SectionHeader }     from '@/components/leadership/SectionHeader'
import { LeadershipNetwork } from '@/components/leadership/LeadershipNetwork'
import { ImpactTags }        from '@/components/leadership/ImpactTags'
import {
  LEADERSHIP_HEADER,
  EXPERIENCE_NODES,
  IMPACT_TAGS,
} from '@/constants/leadership.constants'

export function LeadershipSection() {
  return (
    <section
      id="beyond-projects"
      aria-label="Beyond The Projects — Community and Leadership"
      className="relative w-full overflow-hidden py-28 px-6"
      style={{
        background: [
          'radial-gradient(ellipse 600px 450px at 15% 20%, rgba(245,200,66,0.07) 0%, transparent 65%)',
          'radial-gradient(ellipse 500px 400px at 85% 75%, rgba(245,200,66,0.06) 0%, transparent 60%)',
          'radial-gradient(ellipse 400px 300px at 50% 50%, rgba(59,130,246,0.025) 0%, transparent 60%)',
          '#F8F9F5',
        ].join(', '),
      }}
    >
      {/* Decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left soft circle */}
        <div
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #F5C842, transparent)' }}
        />
        {/* Bottom-right soft circle */}
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <SectionHeader
          label={LEADERSHIP_HEADER.label}
          heading={LEADERSHIP_HEADER.heading}
          subtext={LEADERSHIP_HEADER.subtext}
        />

        {/* Connected experience network */}
        <LeadershipNetwork nodes={EXPERIENCE_NODES} />

        {/* Impact tags */}
        <ImpactTags tags={IMPACT_TAGS} />
      </div>
    </section>
  )
}
