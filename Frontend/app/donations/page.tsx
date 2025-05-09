"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronDown, Download, ExternalLink, Filter, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const donations = [
  {
    id: "DON-1234",
    donor: "Rahul Sharma",
    amount: "₹5,000",
    date: "May 1, 2023",
    mode: "UPI",
    status: "Verified",
    hash: "0x8a7d...3f9b",
  },
  {
    id: "DON-1233",
    donor: "Priya Patel",
    amount: "₹10,000",
    date: "April 29, 2023",
    mode: "Bank Transfer",
    status: "Verified",
    hash: "0x7b6c...2e8a",
  },
  {
    id: "DON-1232",
    donor: "Amit Singh",
    amount: "₹2,500",
    date: "April 28, 2023",
    mode: "Cash",
    status: "Pending",
    hash: "Awaiting",
  },
  {
    id: "DON-1231",
    donor: "Neha Gupta",
    amount: "₹7,500",
    date: "April 27, 2023",
    mode: "UPI",
    status: "Verified",
    hash: "0x3e5d...9c7b",
  },
  {
    id: "DON-1230",
    donor: "Vikram Reddy",
    amount: "₹15,000",
    date: "April 26, 2023",
    mode: "Bank Transfer",
    status: "Verified",
    hash: "0x2f4a...8d6e",
  },
  {
    id: "DON-1229",
    donor: "Ananya Desai",
    amount: "₹3,000",
    date: "April 25, 2023",
    mode: "UPI",
    status: "Verified",
    hash: "0x9c4b...7e2d",
  },
  {
    id: "DON-1228",
    donor: "Rajesh Kumar",
    amount: "₹8,000",
    date: "April 24, 2023",
    mode: "Bank Transfer",
    status: "Verified",
    hash: "0x5d3f...1a8c",
  },
  {
    id: "DON-1227",
    donor: "Meera Joshi",
    amount: "₹1,200",
    date: "April 23, 2023",
    mode: "Cash",
    status: "Pending",
    hash: "Awaiting",
  },
  {
    id: "DON-1226",
    donor: "Suresh Iyer",
    amount: "₹25,000",
    date: "April 22, 2023",
    mode: "Bank Transfer",
    status: "Verified",
    hash: "0x4a2e...9f7b",
  },
  {
    id: "DON-1225",
    donor: "Kavita Menon",
    amount: "₹5,500",
    date: "April 21, 2023",
    mode: "UPI",
    status: "Verified",
    hash: "0x1b8d...6c3a",
  },
]

export default function DonationsPage() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Donations</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Donation Tracker</CardTitle>
          <CardDescription>View and manage all donations received by the temple</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search donations..." className="pl-8" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Payment Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modes</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Donor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Mode</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Blockchain</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={donation.donor} />
                            <AvatarFallback>{donation.donor.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{donation.donor}</span>
                        </div>
                      </TableCell>
                      <TableCell>{donation.amount}</TableCell>
                      <TableCell className="hidden md:table-cell">{donation.date}</TableCell>
                      <TableCell className="hidden md:table-cell">{donation.mode}</TableCell>
                      <TableCell>
                        <Badge variant={donation.status === "Verified" ? "success" : "outline"}>
                          {donation.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {donation.hash !== "Awaiting" ? (
                          <Button variant="link" className="p-0 h-auto" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                              {donation.hash}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        ) : (
                          donation.hash
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Send receipt</DropdownMenuItem>
                            <DropdownMenuItem>Edit donation</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
