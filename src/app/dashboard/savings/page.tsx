"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SavingsProgress } from "@/components/dashboard/savings-progress"

export default function SavingsPage() {
  const [amount, setAmount] = useState("")

  const handleAddSavings = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or state management
    console.log("Adding savings:", amount)
    setAmount("")
  }

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl font-bold text-primary mb-6">Savings</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <SavingsProgress />
        
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Add to Savings</CardTitle>
            <CardDescription className="font-sans">Contribute to your savings goal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddSavings}>
              <div className="grid w-full items-center gap-4">
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
            <Button onClick={handleAddSavings}>Add to Savings</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Savings History</CardTitle>
          <CardDescription className="font-sanss">Your recent savings contributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="font-sans space-y-4">
            {[
              { date: "2023-06-15", amount: 100 },
              { date: "2023-06-01", amount: 150 },
              { date: "2023-05-15", amount: 200 },
              { date: "2023-05-01", amount: 100 },
            ].map((entry, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{entry.date}</span>
                <span className="font-medium">${entry.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

