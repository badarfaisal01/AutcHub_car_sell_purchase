import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Gauge, Fuel, Settings, Phone, Mail, Heart, Share2, AlertTriangle } from "lucide-react"

// Mock data - in real app, this would come from API
const carData = {
  "1": {
    id: "1",
    title: "2020 Toyota Corolla GLi",
    price: 3200000,
    year: 2020,
    mileage: 45000,
    location: "Karachi",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    condition: "Excellent",
    transmission: "Manual",
    fuelType: "Petrol",
    brand: "Toyota",
    model: "Corolla",
    variant: "GLi",
    engineCapacity: "1300cc",
    color: "White",
    assembly: "Local",
    bodyType: "Sedan",
    registrationCity: "Karachi",
    description:
      "Well maintained Toyota Corolla GLi in excellent condition. Single owner, all documents clear. Recently serviced with new tires. Perfect for family use.",
    features: ["Air Conditioning", "Power Steering", "Power Windows", "Central Locking", "Alloy Rims", "CD Player"],
    seller: {
      name: "Ahmed Khan",
      phone: "+92 300 1234567",
      email: "ahmed@example.com",
      location: "Karachi",
      memberSince: "2020",
    },
  },
}

interface CarDetailPageProps {
  params: {
    id: string
  }
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = carData[params.id as keyof typeof carData]

  if (!car) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={car.images[0] || "/placeholder.svg"}
                    alt={car.title}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {car.condition}
                  </Badge>
                </div>

                {car.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {car.images.slice(1).map((image, index) => (
                      <Image
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${car.title} ${index + 2}`}
                        width={200}
                        height={150}
                        className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Car Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{car.title}</CardTitle>
                    <p className="text-3xl font-bold text-blue-600 mt-2">{formatPrice(car.price)}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-semibold">{car.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Mileage</p>
                      <p className="font-semibold">{car.mileage.toLocaleString()} km</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Fuel Type</p>
                      <p className="font-semibold">{car.fuelType}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-semibold">{car.transmission}</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3">Specifications</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Brand:</span>
                        <span>{car.brand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Model:</span>
                        <span>{car.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Variant:</span>
                        <span>{car.variant}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Engine:</span>
                        <span>{car.engineCapacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Color:</span>
                        <span>{car.color}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Additional Info</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Assembly:</span>
                        <span>{car.assembly}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Body Type:</span>
                        <span>{car.bodyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Registration:</span>
                        <span>{car.registrationCity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Condition:</span>
                        <span>{car.condition}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="justify-start">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{car.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">{car.seller.name}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {car.seller.location}
                    </div>
                    <p className="text-sm text-gray-500">Member since {car.seller.memberSince}</p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Seller
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-yellow-800">Safety Tips</p>
                        <p className="text-yellow-700">
                          Always meet in a public place and inspect the car thoroughly before purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>{car.location}</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500">Map would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
