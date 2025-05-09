"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronDown, Download, ExternalLink, Filter, Search, Upload } from "lucide-react"
import { format } from "date-fns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ExpenseDistribution } from "@/components/expense-distribution"

const expenses = [
  {
    id: "EXP-567",
    category: "Food & Prasad",
    amount: "₹12,500",
    date: "May 1, 2023",
    description: "Daily prasad ingredients",
    status: "Verified",
    hash: "0x8a7d...3f9b",
  },
  {
    id: "EXP-566",
    category: "Salaries",
    amount: "₹25,000",
    date: "April 29, 2023",
    description: "Staff salaries for April",
    status: "Verified",
    hash: "0x7b6c...2e8a",
  },
  {
    id: "EXP-565",
    category: "Infrastructure",
    amount: "₹8,750",
    date: "April 28, 2023",
    description: "Repair work for temple steps",
    status: "Pending",
    hash: "Awaiting",
  },
  {
    id: "EXP-564",
    category: "Festivals",
    amount: "₹15,000",
    date: "April 27, 2023",
    description: "Preparations for upcoming festival",
    status: "Verified",
    hash: "0x3e5d...9c7b",
  },
  {
    id: "EXP-563",
    category: "Miscellaneous",
    amount: "₹3,200",
    date: "April 26, 2023",
    description: "Office supplies and stationery",
    status: "Verified",
    hash: "0x2f4a...8d6e",
  },
  {
    id: "EXP-562",
    category: "Food & Prasad",
    amount: "₹9,800",
    date: "April 25, 2023",
    description: "Special prasad for weekend",
    status: "Verified",
    hash: "0x9c4b...7e2d",
  },
  {
    id: "EXP-561",
    category: "Infrastructure",
    amount: "₹35,000",
    date: "April 24, 2023",
    description: "Electrical work and lighting",
    status: "Verified",
    hash: "0x5d3f...1a8c",
  },
  {
    id: "EXP-560",
    category: "Miscellaneous",
    amount: "₹4,500",
    date: "April 23, 2023",
    description: "Cleaning supplies",
    status: "Pending",
    hash: "Awaiting",
  },
]

export default function ExpensesPage() {
  const [date, setDate] = useState<Date>()
  const [selectedTab, setSelectedTab] = useState("list")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Expenses</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list" value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Expense List</TabsTrigger>
          <TabsTrigger value="add">Add Expense</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Manager</CardTitle>
              <CardDescription>View and manage all temple expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search expenses..." className="pl-8" />
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
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="food">Food & Prasad</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="salaries">Salaries</SelectItem>
                        <SelectItem value="festivals">Festivals</SelectItem>
                        <SelectItem value="misc">Miscellaneous</SelectItem>
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
                        <TableHead>Category</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="hidden md:table-cell">Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Blockchain</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {expenses.map((expense) => (
                        <TableRow key={expense.id}>
                          <TableCell className="font-medium">{expense.id}</TableCell>
                          <TableCell>{expense.category}</TableCell>
                          <TableCell>{expense.amount}</TableCell>
                          <TableCell className="hidden md:table-cell">{expense.date}</TableCell>
                          <TableCell className="hidden md:table-cell">{expense.description}</TableCell>
                          <TableCell>
                            <Badge variant={expense.status === "Verified" ? "success" : "outline"}>
                              {expense.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {expense.hash !== "Awaiting" ? (
                              <Button variant="link" className="p-0 h-auto" asChild>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                  {expense.hash}
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              </Button>
                            ) : (
                              expense.hash
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
                                <DropdownMenuItem>View receipt</DropdownMenuItem>
                                <DropdownMenuItem>Edit expense</DropdownMenuItem>
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
        </TabsContent>

        <TabsContent value="add" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Expense</CardTitle>
              <CardDescription>Record a new expense with details and receipt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="category">Expense Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food & Prasad</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="salaries">Salaries</SelectItem>
                      <SelectItem value="festivals">Festivals</SelectItem>
                      <SelectItem value="misc">Miscellaneous</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="date" variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter expense details" rows={3} />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="receipt">Upload Receipt</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="receipt-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or PDF (MAX. 10MB)</p>
                      </div>
                      <input id="receipt-upload" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSelectedTab("list")}>
                Cancel
              </Button>
              <Button>Submit Expense</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Distribution</CardTitle>
              <CardDescription>Breakdown of temple expenses by category</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ExpenseDistribution />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Food & Prasad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹32,300</div>
                <p className="text-xs text-muted-foreground">35% of total expenses</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹43,750</div>
                <p className="text-xs text-muted-foreground">25% of total expenses</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Salaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹25,000</div>
                <p className="text-xs text-muted-foreground">20% of total expenses</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹15,000</div>
                <p className="text-xs text-muted-foreground">15% of total expenses</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
