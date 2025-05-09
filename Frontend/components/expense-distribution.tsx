"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Food & Prasad", value: 35 },
  { name: "Infrastructure", value: 25 },
  { name: "Salaries", value: 20 },
  { name: "Festivals", value: 15 },
  { name: "Miscellaneous", value: 5 },
]

const COLORS = ["#16a34a", "#ea580c", "#0284c7", "#9333ea", "#dc2626"]

export function ExpenseDistribution() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
