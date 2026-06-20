import { Hero }               from '@/components/sections/Hero'
import { JourneySection }     from '@/components/sections/Journey'
import { ThingsBuiltSection } from '@/components/sections/ThingsBuiltSection'
import { LeadershipSection }  from '@/components/sections/LeadershipSection'
import { ContactSection }     from '@/components/sections/ContactSection'

export default function App() {
  return (
    <main className="relative bg-[#F7F9FC] overflow-x-hidden">
      <Hero />
      <JourneySection />
      <ThingsBuiltSection />
      <LeadershipSection />
      <ContactSection />
    </main>
  )
}
