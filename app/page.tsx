import { Navigation } from "@/components/wedding/navigation"
import { HeroSection } from "@/components/wedding/hero-section"
import { StorySection } from "@/components/wedding/story-section"
import { PassportSection } from "@/components/wedding/passport-section"
import { ParachuteSection } from "@/components/wedding/parachute-section"
import { DepartureBoardSection } from "@/components/wedding/departure-board-section"
import { CheckinSection } from "@/components/wedding/checkin-section"
import { TravelSection } from "@/components/wedding/travel-section"
import { ScheduleSection } from "@/components/wedding/schedule-section"
import { RSVPSection } from "@/components/wedding/rsvp-section"
import { Footer } from "@/components/wedding/footer"
import { DroneGallery } from "@/components/wedding/gallery-section"
import { ShelterSection } from "@/components/wedding/shelter-section"

export default function WeddingPage() {
  return (
    <main id="accueil" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CheckinSection />
      <RSVPSection />
      <StorySection />
      <PassportSection />
      <ParachuteSection />
      <DroneGallery />
      <DepartureBoardSection />
      <TravelSection />
      {/* <ScheduleSection /> */}
      <ShelterSection />
      <Footer />
    </main>
  )
}
