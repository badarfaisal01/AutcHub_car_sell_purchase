import CarCard from "@/components/car-card"

// Mock data - in real app, this would come from API
const featuredCars = [
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
  },
]

export default function FeaturedCars() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Cars</h2>
          <p className="text-lg text-gray-600">Handpicked cars with the best value</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  )
}
