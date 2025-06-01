"use client"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import VideoSection from "./components/VideoSection"
import AboutSection from "./components/AboutSection"
import WhyJoinSection from "./components/WhyJoinSection"
import AboutDrSadick from "./components/AboutDrSadick"
import DrSadickGallery from "./components/DrSadickGallery"
import JoinNowCTA from "./components/JoinNowCTA"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import ScrollIndicator from "./components/ScrollIndicator"
import VideoTestimonialsSection from "./components/VideoTestimonialsSection"
import MiniTestimonials from "./components/MiniTestimonials"

export default function LandingPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-warm-white text-navy">
        <ScrollIndicator />
        <Header />
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <WhyJoinSection />
        <VideoTestimonialsSection />
        <MiniTestimonials />
        <AboutDrSadick />
        <DrSadickGallery />
        <JoinNowCTA />
        <FAQSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
