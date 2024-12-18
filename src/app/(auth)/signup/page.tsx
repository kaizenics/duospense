"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { AuthLayout } from "@/components/auth-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { Separator } from "@/components/ui/separator"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 3000)
  }

  return (
    <AuthLayout 
      title="Create an Account" 
      subtitle="Join Duospense and take control of your finances"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" className="w-full mb-6" onClick={() => console.log("Google sign-up")}>
          <Icons.google className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        <Separator className="my-8" />
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              type="text" 
              autoCapitalize="words" 
              autoComplete="name" 
              autoCorrect="off" 
              disabled={isLoading} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              placeholder="hello@example.com" 
              type="email" 
              autoCapitalize="none" 
              autoComplete="email" 
              autoCorrect="off" 
              disabled={isLoading} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" disabled={isLoading} required />
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create Account
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </div>
      </motion.div>
    </AuthLayout>
  )
}

