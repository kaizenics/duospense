"use client"

import { useState } from "react"
import { Bell, Search, Menu, Plus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AddTransactionModal } from "@/components/dashboard/transaction-modal"
import { useSidebar } from "@/context/sidebar-context"

export function MiniNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false)
  const { toggleSidebar } = useSidebar()

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        {isSearchOpen ? (
          <Input
            type="search"
            placeholder="Search..."
            className="w-64"
            onBlur={() => setIsSearchOpen(false)}
          />
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => setIsAddTransactionModalOpen(true)}>
          <Plus className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="font-heading text-sm font-medium leading-none">User</p>
                <p className="font-sans text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-sans">Profile</DropdownMenuItem>
            <DropdownMenuItem className="font-sans">Settings</DropdownMenuItem>
            <DropdownMenuItem className="font-sans text-rose-500">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AddTransactionModal
        isOpen={isAddTransactionModalOpen}
        onClose={() => setIsAddTransactionModalOpen(false)}
      />
    </div>
  )
}

