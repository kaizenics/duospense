"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [email, setEmail] = useState("user@example.com")
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or state management
    console.log("Saving settings:", { email, darkMode, notifications })
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="font-heading text-3xl font-bold text-primary mb-6">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Account Settings</CardTitle>
          <CardDescription className="font-sans">Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveSettings}>
            <div className="grid w-full items-center gap-4">
              <div className="font-sans flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="font-sans flex items-center space-x-2">
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <div className="font-sans flex items-center space-x-2">
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
                <Label htmlFor="notifications">Enable Notifications</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings} className="font-sans">Save Settings</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Security</CardTitle>
          <CardDescription className="font-sans">Manage your account security</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="font-sans">Change Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Data Management</CardTitle>
          <CardDescription className="font-sans">Manage your account data</CardDescription>
        </CardHeader>
        <CardContent className="font-sans space-y-2">
          <Button variant="outline">Export Data</Button>
          <Button variant="outline" className="ml-2">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  )
}

