"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    donations: 18000,
    expenses: 12000,
  },
  {
    name: "Feb",
    donations: 16000,
    expenses: 14000,
  },
  {
    name: "Mar",
    donations: 19000,
    expenses: 15000,
  },
  {
    name: "Apr",
    donations: 22000,
    expenses: 16500,
  },
  {
    name: "May",
    donations: 25000,
    expenses: 18000,
  },
  {
    name: "Jun",
    donations: 32000,
    expenses: 17000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <Tooltip formatter={(value) => [`₹${value}`, ""]} labelFormatter={(label) => `Month: ${label}`} />
        <Legend />
        <Bar dataKey="donations" name="Donations" fill="#16a34a" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" name="Expenses" fill="#dc2626" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
