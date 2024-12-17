"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2600 },
  { name: "May", total: 2200 },
  { name: "Jun", total: 3000 },
]

export function ExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="currentColor" strokeWidth={2} dot={{ strokeWidth: 4 }} className="stroke-primary" />
      </LineChart>
    </ResponsiveContainer>
  )
}

