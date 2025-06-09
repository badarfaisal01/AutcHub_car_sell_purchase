import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Gauge, Fuel } from "lucide-react"

interface Car {
  id: string
  title: string
  price: number
  year: number
  mileage: number
  location: string
  images: string[]
  condition: string
  transmission: string
  fuelType: string
}

interface CarCardProps {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {
  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} Lac`
    }
    return `${(price / 1000).toFixed(0)}K`
  }

  const formatMileage = (mileage: number) => {
    if (mileage >= 1000) {
      return `${(mileage / 1000).toFixed(0)}K km`
    }
    return `${mileage} km`
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/cars/${car.id}`}>
        <div className="relative">
          <Image
            src={car.images[0] || "/placeholder.svg"}
            alt={car.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 right-2" variant="secondary">
            {car.condition}
          </Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{car.title}</h3>
          <p className="text-2xl font-bold text-blue-600 mb-3">PKR {formatPrice(car.price)}</p>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center">
              <Gauge className="h-4 w-4 mr-2" />
              <span>{formatMileage(car.mileage)}</span>
            </div>
            <div className="flex items-center">
              <Fuel className="h-4 w-4 mr-2" />
              <span>
                {car.fuelType} • {car.transmission}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{car.location}</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
