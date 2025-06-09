import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Car, Shield, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Car</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Buy and sell cars with confidence. Get AI-powered assistance every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cars">
                <Search className="h-5 w-5 mr-2" />
                Browse Cars
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sell">
                <Car className="h-5 w-5 mr-2" />
                Sell Your Car
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Verified Listings</h3>
              <p className="text-blue-100">All cars are verified for authenticity and quality</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
              <p className="text-blue-100">Get personalized recommendations and buying tips</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p className="text-blue-100">Thousands of cars from trusted sellers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
