"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const [email, setEmail] = useState("user@example.com");
  const [notifications, setNotifications] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or state management
    console.log("Saving settings:", { email, notifications });
  };

  // Add form handling for password change
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password changed successfully");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl font-bold text-primary mb-6">
        Settings
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Account Settings</CardTitle>
          <CardDescription className="font-sans">
            Manage your account preferences
          </CardDescription>
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
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
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
          <Button onClick={handleSaveSettings} className="font-sans">
            Save Settings
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Security</CardTitle>
          <CardDescription className="font-sans">
            Manage your account security
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="font-sans">
                Change Password
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="font-heading">Change Password</DialogTitle>
                <DialogDescription className="font-sans">
                  Enter your current password and a new password below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="font-sans space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Current Password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new">New Password</Label>
                    <Input id="new" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm">Confirm New Password</Label>
                    <Input id="confirm" type="password" />
                  </div>
                </div>
                <Button type="submit" className="font-sans w-full" disabled={isLoading}>
                  {isLoading ? "Changing Password..." : "Change Password"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Data Management</CardTitle>
          <CardDescription className="font-sans">
            Manage your account data
          </CardDescription>
        </CardHeader>
        <CardContent className="font-sans space-y-2">
          <Button variant="outline">Export Data</Button>
          <Button variant="destructive" className="ml-2">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
