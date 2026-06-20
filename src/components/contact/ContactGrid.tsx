import { ContactPath } from './ContactPath'
import { ProfileCard } from './ProfileCard'
import { ResumeCard }  from './ResumeCard'
import { SocialCard }  from './SocialCard'
import type { ContactPathData, SocialCardData } from '@/types/contact.types'

interface ContactGridProps {
  paths:       ContactPathData[]
  socialCards: SocialCardData[]
  imageSrc?:   string
}

export function ContactGrid({ paths, socialCards, imageSrc }: ContactGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

      {/* ── LEFT: Choose your path ── */}
      <div className="flex flex-col gap-3">
        <p className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted mb-1">
          Why are you here?
        </p>
        {paths.map((path, i) => (
          <ContactPath key={path.id} path={path} delay={i * 0.08} />
        ))}

        {/* Social cards below paths on left */}
        <div className="mt-6">
          <p className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-muted mb-3">
            Find me here
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialCards.map((card, i) => (
              <SocialCard key={card.platform} card={card} delay={0.3 + i * 0.07} />
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: Sidebar cards ── */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-8">
        <ProfileCard imageSrc={imageSrc} />
        <ResumeCard />
      </div>

    </div>
  )
}
