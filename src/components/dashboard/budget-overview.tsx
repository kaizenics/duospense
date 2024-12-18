"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const categories = [
  { name: "Housing", budget: 1000, spent: 950 },
  { name: "Food", budget: 500, spent: 480 },
  { name: "Transportation", budget: 300, spent: 250 },
  { name: "Entertainment", budget: 200, spent: 180 },
  { name: "Utilities", budget: 250, spent: 240 },
]

export function BudgetOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Budget Overview</CardTitle>
        <CardDescription className="font-sans">Your spending by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="font-sans flex justify-between text-sm">
                <span>{category.name}</span>
                <span className="font-medium">
                  ${category.spent} / ${category.budget}
                </span>
              </div>
              <Progress value={(category.spent / category.budget) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

