"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import CarCard from "@/components/car-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - in real app, this would come from API
const allCars = [
  {
    id: "1",
    title: "2020 Toyota Corolla GLi",
    price: 3200000,
    year: 2020,
    mileage: 45000,
    location: "Karachi",
    images: ["/placeholder.svg?height=200&width=300"],
    condition: "Excellent",
    transmission: "Manual",
    fuelType: "Petrol",
    brand: "toyota",
  },
  {
    id: "2",
    title: "2019 Honda Civic Turbo",
    price: 4500000,
    year: 2019,
    mileage: 35000,
    location: "Lahore",
    images: ["/placeholder.svg?height=200&width=300"],
    condition: "Excellent",
    transmission: "Automatic",
    fuelType: "Petrol",
    brand: "honda",
  },
  {
    id: "3",
    title: "2021 Suzuki Alto VXR",
    price: 1800000,
    year: 2021,
    mileage: 25000,
    location: "Islamabad",
    images: ["/placeholder.svg?height=200&width=300"],
    condition: "Good",
    transmission: "Manual",
    fuelType: "Petrol",
    brand: "suzuki",
  },
  {
    id: "4",
    title: "2018 Hyundai Tucson GLS",
    price: 6200000,
    year: 2018,
    mileage: 55000,
    location: "Rawalpindi",
    images: ["/placeholder.svg?height=200&width=300"],
    condition: "Good",
    transmission: "Automatic",
    fuelType: "Petrol",
    brand: "hyundai",
  },
  {
    id: "5",
    title: "2022 KIA Picanto",
    price: 2100000,
    year: 2022,
    mileage: 15000,
    location: "Karachi",
    images: ["/placeholder.svg?height=200&width=300"],
    condition: "Excellent",
    transmission: "Manual",
    fuelType: "Petrol",
    brand: "kia",
  },
  {
    id: "6",
    title: "2017 BMW 3 Series",
    price: 8500000,
    year: 2017,
    mileage: 65000,
    location: "Lahore",
    images: ["/placeholder.svg?height=200&width=300"],
    condition: "Good",
    transmission: "Automatic",
    fuelType: "Petrol",
    brand: "bmw",
  },
]

export default function CarsPage() {
  const searchParams = useSearchParams()
  const [filteredCars, setFilteredCars] = useState(allCars)
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "all")
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get("location") || "all")
  const [sortBy, setSortBy] = useState("newest")

  useEffect(() => {
    let filtered = allCars

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((car) => car.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Filter by brand
    if (selectedBrand !== "all") {
      filtered = filtered.filter((car) => car.brand === selectedBrand)
    }

    // Filter by location
    if (selectedLocation !== "all") {
      filtered = filtered.filter((car) => car.location.toLowerCase() === selectedLocation.toLowerCase())
    }

    // Sort cars
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "year-new":
        filtered.sort((a, b) => b.year - a.year)
        break
      case "year-old":
        filtered.sort((a, b) => a.year - b.year)
        break
      default:
        // newest first
        filtered.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
    }

    setFilteredCars(filtered)
  }, [searchQuery, selectedBrand, selectedLocation, sortBy])

  const brands = ["toyota", "honda", "suzuki", "hyundai", "kia", "bmw", "mercedes", "audi"]
  const cities = ["karachi", "lahore", "islamabad", "rawalpindi", "faisalabad", "multan"]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Cars</h1>
          <p className="text-gray-600">Find your perfect car from our extensive collection</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <Input
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year-new">Year: Newest</SelectItem>
                <SelectItem value="year-old">Year: Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCars.length} of {allCars.length} cars
          </p>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cars found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedBrand("all")
                setSelectedLocation("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
