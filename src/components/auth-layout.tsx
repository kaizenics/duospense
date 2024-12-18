import Image from "next/image"
import { Card } from "@/components/ui/card"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

import duospenseIcon from "@/assets/duospense-icon.png"

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 p-4 py-8 md:py-12">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Auth Form Section */}
        <Card className="w-full p-4 sm:p-8 shadow-lg backdrop-blur-sm bg-card/50 order-2 lg:order-1">
          <div className="mb-8">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-2">{title}</h1>
            <p className="font-sans text-sm sm:text-base text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </Card>

        {/* Welcome Section - Always visible */}
        <div className="text-center order-1 lg:order-2">
          <div className="max-w-md mx-auto">
            <Image
              src={duospenseIcon}
              width={200}
              height={200}
              alt="Duospense Logo"
              className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
              priority
            />
            <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-4">
              Welcome to Duospense
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-sm mx-auto px-4">
              Your personal finance companion for smart expense tracking and budgeting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

