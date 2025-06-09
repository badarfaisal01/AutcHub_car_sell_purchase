"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Car, Menu, X, User, LogOut, Plus } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AutoHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cars" className="text-gray-700 hover:text-blue-600">
              Browse Cars
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-blue-600">
              Sell Car
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button asChild variant="outline">
                  <Link href="/sell">
                    <Plus className="h-4 w-4 mr-2" />
                    Post Ad
                  </Link>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/cars" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Browse Cars
              </Link>
              <Link href="/sell" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Sell Car
              </Link>
              {user ? (
                <>
                  <Link href="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                    Login
                  </Link>
                  <Link href="/register" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
