"use client"

import { useState } from "react"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  urls: [
    { value: "https://example.com" },
    { value: "https://twitter.com/johndoe" },
  ],
}

export default function ProfilePage() {
  const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = useState(true)
  const [isSmsNotificationsEnabled, setIsSmsNotificationsEnabled] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit() {
    toast.success("Profile updated", {
      description: "Your profile has been successfully updated.",
    })
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="font-heading text-3xl font-bold text-primary">User Profile</h1>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="font-heading">John Doe</CardTitle>
              <CardDescription className="font-sans">johndoe@example.com</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-heading">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe" {...field} />
                    </FormControl>
                    <FormDescription className="font-sans">
                      This is your public display name. It can be your real name or a
                      pseudonym.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-heading">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" {...field} />
                    </FormControl>
                    <FormDescription className="font-sans">
                      You can manage verified email addresses in your{" "}
                      <Button variant="link" className="p-0">
                        email settings
                      </Button>
                      .
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
              <div>
                <h3 className="mb-4 text-lg font-medium">Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="email-notifications"
                      checked={isEmailNotificationsEnabled}
                      onCheckedChange={setIsEmailNotificationsEnabled}
                    />
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="sms-notifications"
                      checked={isSmsNotificationsEnabled}
                      onCheckedChange={setIsSmsNotificationsEnabled}
                    />
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  </div>
                </div>
              </div>
              <Button type="submit" className="font-sans">Update profile</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

