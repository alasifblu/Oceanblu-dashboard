"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type UserRole = "admin" | "user"

export interface User {
  email: string
  name: string
  role: UserRole
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users for the system
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  "admin@armyiba.edu.bd": {
    password: "admin123",
    user: {
      email: "admin@armyiba.edu.bd",
      name: "Admin User",
      role: "admin",
    },
  },
  "user@armyiba.edu.bd": {
    password: "user123",
    user: {
      email: "user@armyiba.edu.bd",
      name: "AIBA User",
      role: "user",
    },
  },
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("aiba_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem("aiba_user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    const normalizedEmail = email.toLowerCase().trim()
    const demoUser = DEMO_USERS[normalizedEmail]

    // Check demo users
    if (demoUser && demoUser.password === password) {
      setUser(demoUser.user)
      localStorage.setItem("aiba_user", JSON.stringify(demoUser.user))
      return { success: true }
    }

    // Check user list from localStorage (added by admin)
    const userList = JSON.parse(localStorage.getItem("aiba_user_list") || "[]")
    const userMember = userList.find((u: { email: string }) => u.email.toLowerCase() === normalizedEmail)
    
    if (userMember && password === "user123") {
      const newUser: User = {
        email: userMember.email,
        name: userMember.name || userMember.email.split("@")[0],
        role: "user",
      }
      setUser(newUser)
      localStorage.setItem("aiba_user", JSON.stringify(newUser))
      return { success: true }
    }

    return { success: false, error: "Invalid email or password" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("aiba_user")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
