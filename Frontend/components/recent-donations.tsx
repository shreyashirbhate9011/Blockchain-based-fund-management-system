"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const donations = [
  {
    id: "DON-1234",
    donor: "Rahul Sharma",
    amount: "₹5,000",
    date: "2 hours ago",
    mode: "UPI",
    status: "Verified",
    hash: "0x8a7d...3f9b",
  },
  {
    id: "DON-1233",
    donor: "Priya Patel",
    amount: "₹10,000",
    date: "5 hours ago",
    mode: "Bank Transfer",
    status: "Verified",
    hash: "0x7b6c...2e8a",
  },
  {
    id: "DON-1232",
    donor: "Amit Singh",
    amount: "₹2,500",
    date: "Yesterday",
    mode: "Cash",
    status: "Pending",
    hash: "Awaiting",
  },
  {
    id: "DON-1231",
    donor: "Neha Gupta",
    amount: "₹7,500",
    date: "Yesterday",
    mode: "UPI",
    status: "Verified",
    hash: "0x3e5d...9c7b",
  },
  {
    id: "DON-1230",
    donor: "Vikram Reddy",
    amount: "₹15,000",
    date: "2 days ago",
    mode: "Bank Transfer",
    status: "Verified",
    hash: "0x2f4a...8d6e",
  },
]

export function RecentDonations() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Donor</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="hidden md:table-cell">Mode</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donations.map((donation) => (
          <TableRow key={donation.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={donation.donor} />
                  <AvatarFallback>{donation.donor.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">{donation.donor}</div>
              </div>
            </TableCell>
            <TableCell>{donation.amount}</TableCell>
            <TableCell className="hidden md:table-cell">{donation.date}</TableCell>
            <TableCell className="hidden md:table-cell">{donation.mode}</TableCell>
            <TableCell>
              <Badge variant={donation.status === "Verified" ? "success" : "outline"}>{donation.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
