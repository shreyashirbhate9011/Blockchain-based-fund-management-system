"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    amount: 12000,
  },
  {
    name: "Feb",
    amount: 16000,
  },
  {
    name: "Mar",
    amount: 19000,
  },
  {
    name: "Apr",
    amount: 22000,
  },
  {
    name: "May",
    amount: 25000,
  },
  {
    name: "Jun",
    amount: 32000,
  },
]

export function DonationChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} labelFormatter={(label) => `Month: ${label}`} />
        <Legend />
        <Area
          type="monotone"
          dataKey="amount"
          name="Donation Amount"
          stroke="#16a34a"
          fill="#16a34a"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
