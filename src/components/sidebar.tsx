"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, PiggyBank, LineChart, Settings, HelpCircle, User } from 'lucide-react'
import { useSidebar } from "@/context/sidebar-context"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

import duospenseIcon from "@/assets/duospense-icon.png"
const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Savings", href: "/dashboard/savings", icon: PiggyBank },
  { name: "Budget", href: "/dashboard/budget", icon: LineChart },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isCollapsed, toggleSidebar } = useSidebar()

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !isCollapsed) {
        toggleSidebar()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isCollapsed, toggleSidebar])

  return (
    <>
      {/* Backdrop for mobile */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-background/50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      <div className={cn(
        "fixed lg:static h-screen z-40 border-r bg-gray-100/40 dark:bg-neutral-900 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        "lg:translate-x-0",
        isCollapsed ? "-translate-x-full sm:translate-x-0" : "translate-x-0"
      )}>
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className={cn(
            "flex h-[60px] items-center",
            isCollapsed ? "justify-center px-2" : "px-6"
          )}>
            <Link 
              className="flex items-center gap-2 font-semibold" 
              href="/dashboard"
            >
              <Image src={duospenseIcon} width={30} height={30} alt="Duospense" />
              <span className={cn(
                "font-heading text-primary text-lg font-bold transition-all duration-300 ease-in-out",
                isCollapsed ? "hidden" : "block"
              )}>
                Duospense
              </span>
            </Link>
          </div>
          <ScrollArea className={cn("flex-1", isCollapsed ? "px-2" : "px-3")}>
            <div className="space-y-2 py-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  size={isCollapsed ? "icon" : "default"}
                  className={cn(
                    "w-full",
                    isCollapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <Link href={item.href} className="flex items-center">
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && (
                      <span className="font-sans ml-2">{item.name}</span>
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

