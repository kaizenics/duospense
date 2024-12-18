import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

const transactions = [
  { id: 1, description: "Grocery Store", amount: -75.50, date: "2023-06-15" },
  { id: 2, description: "Salary Deposit", amount: 3000, date: "2023-06-14" },
  { id: 3, description: "Electric Bill", amount: -120, date: "2023-06-13" },
  { id: 4, description: "Online Shopping", amount: -59.99, date: "2023-06-12" },
  { id: 5, description: "Restaurant", amount: -45, date: "2023-06-11" },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Recent Transactions</CardTitle>
        <CardDescription className="font-sans">Your latest financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <div className="space-y-1">
                <p className="font-heading text-sm font-medium leading-none">{transaction.description}</p>
                <p className="font-sans text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <div className={`font-sans ml-auto font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.amount > 0 ? (
                  <ArrowUpIcon className="mr-1 h-4 w-4 inline" />
                ) : (
                  <ArrowDownIcon className="mr-1 h-4 w-4 inline" />
                )}
                ${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="font-sans mt-4 text-center">
          <Button variant="outline">View All Transactions</Button>
        </div>
      </CardContent>
    </Card>
  )
}

