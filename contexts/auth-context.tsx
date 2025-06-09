"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  phone?: string
  city?: string
  avatar?: string
  role: "user" | "admin"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem("autohub_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call your API
    const mockUser: User = {
      id: "1",
      name: "Ahmed Khan",
      email: email,
      phone: "+92 300 1234567",
      city: "Karachi",
      role: "user",
    }

    setUser(mockUser)
    localStorage.setItem("autohub_user", JSON.stringify(mockUser))
  }

  const register = async (userData: any) => {
    // Mock registration - in real app, this would call your API
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      city: userData.city,
      role: "user",
    }

    setUser(newUser)
    localStorage.setItem("autohub_user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("autohub_user")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
