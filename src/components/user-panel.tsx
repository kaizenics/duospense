"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpenseChart } from "@/components/ui/expense-chart"
import { BudgetOverview } from "@/components/dashboard/budget-overview"
import { SavingsProgress } from "@/components/dashboard/savings-progress"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { FinancialInsights } from "@/components/dashboard/financial-insights"
import { DollarSign, TrendingUp, PiggyBank } from 'lucide-react'

export function UserPanel() {
  const [activeTab, setActiveTab] = useState("overview")

  const totalExpenses = 2345.67
  const totalBudget = 3000
  const totalSavings = 5000

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-3xl font-bold text-primary mb-2">Welcome back, Niko!</h1>
        <p className="font-sans text-muted-foreground">Here&apos;s an overview of your finances.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-sans text-sm font-medium">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-heading text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
            <p className="font-sans text-xs text-muted-foreground">
              {((totalExpenses / totalBudget) * 100).toFixed(1)}% of budget
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-sans text-sm font-medium">Total Budget</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-heading text-2xl font-bold">${totalBudget.toFixed(2)}</div>
            <p className="font-sans text-xs text-muted-foreground">
              ${(totalBudget - totalExpenses).toFixed(2)} remaining
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-sans text-sm font-medium">Total Savings</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-heading text-2xl font-bold">${totalSavings.toFixed(2)}</div>
            <p className="font-sans text-xs text-muted-foreground">
              +${(totalSavings * 0.03).toFixed(2)} interest this month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="font-heading">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <ExpenseChart />
          <RecentTransactions />
        </TabsContent>
        <TabsContent value="expenses" className="space-y-4">
          <ExpenseChart />
          <RecentTransactions />
        </TabsContent>
        <TabsContent value="budget" className="space-y-4">
          <BudgetOverview />
        </TabsContent>
        <TabsContent value="savings" className="space-y-4">
          <SavingsProgress />
        </TabsContent>
      </Tabs>

      <FinancialInsights />
    </div>
  )
}

