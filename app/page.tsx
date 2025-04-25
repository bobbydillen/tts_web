import HeroSection from "@/components/hero-section"
import FacilitiesSection from "@/components/facilities-section"
import AboutSection from "@/components/about-section"
import RoomsSection from "@/components/rooms-section"
import BanquetSection from "@/components/banquet-section"
import ServicesSection from "@/components/services-section"
import SightseeingSection from "@/components/sightseeing-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"
import DayNightToggle from "@/components/day-night-toggle"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FacilitiesSection />
      <AboutSection />
      <RoomsSection />
      <BanquetSection />
      <ServicesSection />
      <SightseeingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
      <DayNightToggle />
      <ScrollToTop />
    </main>
  )
}
