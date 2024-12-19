"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BudgetOverview } from "@/components/dashboard/budget-overview"

export default function BudgetPage() {
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const handleSetBudget = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or state management
    console.log("Setting budget:", { category, amount })
    setCategory("")
    setAmount("")
  }

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl font-bold text-primary mb-6">Budget</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <BudgetOverview />
        
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Set Budget</CardTitle>
            <CardDescription className="font-sans">Allocate your budget for different categories</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSetBudget}>
              <div className="grid w-full items-center gap-4">
                <div className="font-sans flex flex-col space-y-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="housing">Housing</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="font-sans flex flex-col space-y-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    placeholder="Enter amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="font-sans flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSetBudget}>Set Budget</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

