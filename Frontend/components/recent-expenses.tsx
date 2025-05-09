"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const expenses = [
  {
    id: "EXP-567",
    category: "Food & Prasad",
    amount: "₹12,500",
    date: "Today",
    status: "Verified",
  },
  {
    id: "EXP-566",
    category: "Salaries",
    amount: "₹25,000",
    date: "Yesterday",
    status: "Verified",
  },
  {
    id: "EXP-565",
    category: "Infrastructure",
    amount: "₹8,750",
    date: "3 days ago",
    status: "Pending",
  },
  {
    id: "EXP-564",
    category: "Festivals",
    amount: "₹15,000",
    date: "5 days ago",
    status: "Verified",
  },
  {
    id: "EXP-563",
    category: "Miscellaneous",
    amount: "₹3,200",
    date: "1 week ago",
    status: "Verified",
  },
]

export function RecentExpenses() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium">{expense.category}</TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell className="hidden md:table-cell">{expense.date}</TableCell>
            <TableCell>
              <Badge variant={expense.status === "Verified" ? "success" : "outline"}>{expense.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
