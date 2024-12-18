"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SavingsProgress() {
  const currentSavings = 5000
  const savingsGoal = 10000

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Savings Progress</CardTitle>
        <CardDescription className="font-sans">Track your progress towards your savings goal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={(currentSavings / savingsGoal) * 100} />
          <div className="font-sans flex justify-between text-sm">
            <span>Current Savings</span>
            <span className="font-medium">${currentSavings}</span>
          </div>
          <div className="font-sans flex justify-between text-sm">
            <span>Savings Goal</span>
            <span className="font-medium">${savingsGoal}</span>
          </div>
          <div className="text-center">
            <span className="font-heading text-lg font-bold">
              {((currentSavings / savingsGoal) * 100).toFixed(1)}% of goal reached
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

