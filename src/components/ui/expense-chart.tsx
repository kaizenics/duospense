"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2300 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2600 },
  { name: "May", total: 2200 },
  { name: "Jun", total: 3000 },
  { name: "Jul", total: 2800 },
  { name: "Aug", total: 3200 },
  { name: "Sep", total: 2700 },
  { name: "Oct", total: 2400 },
  { name: "Nov", total: 2900 },
  { name: "Dec", total: 3500 },
]

import { TooltipProps } from "recharts";

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-white p-2 shadow-sm">
        <div className="gap-2 p-2">
          <div className="font-heading text-sm text-black">{label}</div>
          <div className="font-sans text-sm font-bold text-black">
            ${payload[0].value}
          </div>
        </div>
      </div>
    )
  }

  return null
}

export function ExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
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
        <Tooltip content={<CustomTooltip />} />
        <Line 
          type="monotone" 
          dataKey="total" 
          stroke="currentColor" 
          strokeWidth={2} 
          dot={{ strokeWidth: 4 }} 
          className="stroke-primary" 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

