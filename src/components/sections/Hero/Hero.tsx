import { HeroLeft }           from './HeroLeft'
import { HeroRight }          from './HeroRight'
import { FloatingMissionCard } from './FloatingMissionCard'
import { ParticleCanvas }     from './ParticleCanvas'
import { useCursorGlow }      from '@/hooks/useCursorGlow'
import lyliaImage from "../../../assets/lylia.jpeg"
import {
  GREETING,
  HEADLINE_WORDS,
  SUBHEADLINE,
  ROLES,
  STATS,
  CTA_BUTTONS,
  PHOTO_META,
  IDENTITY_BADGES,
  MISSION_CARD,
  PARTICLE_CONFIG,
} from '@/constants/hero.constants'

const PHOTO_SRC = lyliaImage;



export function Hero() {
  const glowRef = useCursorGlow()

  return (
    <>
      {/* Background layers (z-0) */}
      <div className="hero-bg" aria-hidden="true" />
      <ParticleCanvas config={PARTICLE_CONFIG} />

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

      {/* Main hero section */}
      <section
        className="relative z-10 min-h-screen grid grid-cols-[60%_40%] items-center px-[5vw]"
        aria-label="Hero — Lylia's introduction"
      >
        {/* Left 60% */}
        <HeroLeft
          greeting={GREETING}
          headlineWords={HEADLINE_WORDS}
          subheadline={SUBHEADLINE}
          roles={ROLES}
          stats={STATS}
          buttons={CTA_BUTTONS}
        />


        {/* Right 40% */}
        <HeroRight
          imageSrc={PHOTO_SRC}
          imageAlt={PHOTO_META.imageAlt}
          name={PHOTO_META.name}
          location={PHOTO_META.location}
          availability={PHOTO_META.availability}
          badges={IDENTITY_BADGES}
          missionCard={MISSION_CARD}
        />
      </section>

      {/* Mission floating card (fixed position, outside grid) */}
      <FloatingMissionCard card={MISSION_CARD} />
    </>
  )
}
