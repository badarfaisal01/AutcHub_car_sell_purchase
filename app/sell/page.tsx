"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { Upload, X, Car } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SellCarPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    model: "",
    variant: "",
    year: "",
    price: "",
    mileage: "",
    condition: "",
    transmission: "",
    fuelType: "",
    engineCapacity: "",
    color: "",
    city: "",
    description: "",
    features: [] as string[],
  })

  // Redirect if not logged in
  if (!user) {
    router.push("/login")
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (images.length + files.length > 10) {
      toast({
        title: "Error",
        description: "Maximum 10 images allowed",
        variant: "destructive",
      })
      return
    }
    setImages((prev) => [...prev, ...files])
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would upload images and submit to API
      console.log("Form data:", formData)
      console.log("Images:", images)

      toast({
        title: "Success",
        description: "Your car listing has been submitted for review!",
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit listing. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const brands = ["Toyota", "Honda", "Suzuki", "Hyundai", "KIA", "Nissan", "Mitsubishi", "BMW", "Mercedes", "Audi"]
  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta"]
  const conditions = ["Excellent", "Good", "Fair", "Poor"]
  const transmissions = ["Manual", "Automatic"]
  const fuelTypes = ["Petrol", "Diesel", "CNG", "Hybrid", "Electric"]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Sell Your Car</h1>
          <p className="text-gray-600 mt-2">Create a listing to reach thousands of potential buyers</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide basic details about your car</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Ad Title</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., 2020 Toyota Corolla GLi"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Select value={formData.brand} onValueChange={(value) => handleSelectChange("brand", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    name="model"
                    required
                    value={formData.model}
                    onChange={handleInputChange}
                    placeholder="e.g., Corolla"
                  />
                </div>

                <div>
                  <Label htmlFor="variant">Variant</Label>
                  <Input
                    id="variant"
                    name="variant"
                    value={formData.variant}
                    onChange={handleInputChange}
                    placeholder="e.g., GLi, XLi"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    required
                    min="1990"
                    max="2024"
                    value={formData.year}
                    onChange={handleInputChange}
                    placeholder="2020"
                  />
                </div>

                <div>
                  <Label htmlFor="price">Price (PKR)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="3200000"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
              <CardDescription>Provide technical specifications of your car</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mileage">Mileage (KM)</Label>
                  <Input
                    id="mileage"
                    name="mileage"
                    type="number"
                    required
                    value={formData.mileage}
                    onChange={handleInputChange}
                    placeholder="45000"
                  />
                </div>

                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleSelectChange("condition", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>
                          {condition}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="transmission">Transmission</Label>
                  <Select
                    value={formData.transmission}
                    onValueChange={(value) => handleSelectChange("transmission", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select transmission" />
                    </SelectTrigger>
                    <SelectContent>
                      {transmissions.map((transmission) => (
                        <SelectItem key={transmission} value={transmission}>
                          {transmission}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fuelType">Fuel Type</Label>
                  <Select value={formData.fuelType} onValueChange={(value) => handleSelectChange("fuelType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                    <SelectContent>
                      {fuelTypes.map((fuelType) => (
                        <SelectItem key={fuelType} value={fuelType}>
                          {fuelType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="engineCapacity">Engine Capacity</Label>
                  <Input
                    id="engineCapacity"
                    name="engineCapacity"
                    value={formData.engineCapacity}
                    onChange={handleInputChange}
                    placeholder="1300cc"
                  />
                </div>

                <div>
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    placeholder="White"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Description */}
          <Card>
            <CardHeader>
              <CardTitle>Location & Description</CardTitle>
              <CardDescription>Add location and detailed description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="city">City</Label>
                <Select value={formData.city} onValueChange={(value) => handleSelectChange("city", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your car's condition, maintenance history, and any additional details..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>Upload up to 10 high-quality images of your car</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="space-y-2">
                    <Label htmlFor="images" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-500">Click to upload</span>
                      <span className="text-gray-500"> or drag and drop</span>
                    </Label>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                  </div>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image) || "/placeholder.svg"}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Listing"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
