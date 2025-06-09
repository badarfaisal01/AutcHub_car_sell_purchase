import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedCars from "@/components/featured-cars"
import SearchSection from "@/components/search-section"
import StatsSection from "@/components/stats-section"
import ChatbotWidget from "@/components/chatbot/chatbot-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchSection />
      <Suspense fallback={<div>Loading featured cars...</div>}>
        <FeaturedCars />
      </Suspense>
      <StatsSection />
      <ChatbotWidget />
    </div>
  )
}
