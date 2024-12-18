import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, TrendingUp, TrendingDown } from 'lucide-react'

const insights = [
  {
    icon: TrendingUp,
    title: "Increased Savings",
    description: "Your savings have increased by 15% compared to last month.",
  },
  {
    icon: TrendingDown,
    title: "High Spending Category",
    description: "Your entertainment expenses are 20% higher than usual this month.",
  },
  {
    icon: AlertCircle,
    title: "Upcoming Bill",
    description: "You have a utility bill of $150 due in 3 days.",
  },
]

export function FinancialInsights() {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="font-heading">Financial Insights</CardTitle>
        <CardDescription className="font-sans">Smart observations about your finances</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <insight.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold">{insight.title}</h4>
                <p className="font-sans text-sm text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

