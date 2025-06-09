"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [brand, setBrand] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    if (brand) params.set("brand", brand)
    if (location) params.set("location", location)
    if (priceRange) params.set("price", priceRange)

    router.push(`/cars?${params.toString()}`)
  }

  const brands = ["Toyota", "Honda", "Suzuki", "Hyundai", "KIA", "Nissan", "Mitsubishi", "BMW", "Mercedes", "Audi"]

  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta"]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Find Your Dream Car</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <Input
                placeholder="Search by make, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brandName) => (
                  <SelectItem key={brandName} value={brandName.toLowerCase()}>
                    {brandName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase()}>
                    <MapPin className="h-4 w-4 mr-2" />
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500000">Under 5 Lacs</SelectItem>
                <SelectItem value="500000-1000000">5-10 Lacs</SelectItem>
                <SelectItem value="1000000-2000000">10-20 Lacs</SelectItem>
                <SelectItem value="2000000-5000000">20-50 Lacs</SelectItem>
                <SelectItem value="5000000+">Above 50 Lacs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6 text-center">
            <Button onClick={handleSearch} size="lg" className="w-full md:w-auto">
              <Search className="h-5 w-5 mr-2" />
              Search Cars
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
