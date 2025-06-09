"use client"
import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Plus, Eye, Edit, Trash2, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock data
const userListings = [
  {
    id: "1",
    title: "2020 Toyota Corolla GLi",
    price: 3200000,
    status: "active",
    views: 245,
    inquiries: 12,
    createdAt: "2024-01-15",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: "2",
    title: "2018 Honda City Aspire",
    price: 2800000,
    status: "pending",
    views: 89,
    inquiries: 5,
    createdAt: "2024-01-10",
    image: "/placeholder.svg?height=100&width=150",
  },
]

const favoriteListings = [
  {
    id: "3",
    title: "2019 Honda Civic Turbo",
    price: 4500000,
    location: "Lahore",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: "4",
    title: "2021 Suzuki Alto VXR",
    price: 1800000,
    location: "Islamabad",
    image: "/placeholder.svg?height=100&width=150",
  },
]

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push("/login")
    return null
  }

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} Lac`
    }
    return `${(price / 1000).toFixed(0)}K`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "sold":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Car className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Listings</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {userListings.filter((l) => l.status === "active").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {userListings.reduce((sum, listing) => sum + listing.views, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageCircle className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Inquiries</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {userListings.reduce((sum, listing) => sum + listing.inquiries, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Favorites</p>
                  <p className="text-2xl font-bold text-gray-900">{favoriteListings.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Car Listings</h2>
              <Button asChild>
                <Link href="/sell">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Listing
                </Link>
              </Button>
            </div>

            <div className="grid gap-6">
              {userListings.map((listing) => (
                <Card key={listing.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{listing.title}</h3>
                          <Badge className={getStatusColor(listing.status)}>{listing.status}</Badge>
                        </div>

                        <p className="text-xl font-bold text-blue-600 mb-2">PKR {formatPrice(listing.price)}</p>

                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {listing.views} views
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {listing.inquiries} inquiries
                          </div>
                          <span>Posted on {new Date(listing.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/cars/${listing.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-xl font-semibold">Favorite Cars</h2>

            <div className="grid gap-6">
              {favoriteListings.map((listing) => (
                <Card key={listing.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
                        <p className="text-xl font-bold text-blue-600 mb-2">PKR {formatPrice(listing.price)}</p>
                        <p className="text-sm text-gray-600">{listing.location}</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/cars/${listing.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <p className="text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900">{user.phone || "Not provided"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <p className="text-gray-900">{user.city || "Not provided"}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
