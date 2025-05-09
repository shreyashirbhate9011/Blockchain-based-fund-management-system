"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Plus, Upload } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

const campaigns = [
  {
    id: 1,
    title: "Temple Renovation Fund",
    description:
      "Help us renovate the ancient structures of our temple to preserve its heritage for future generations.",
    target: "₹15,00,000",
    raised: "₹9,75,000",
    progress: 65,
    startDate: "March 15, 2023",
    endDate: "June 30, 2023",
    status: "Active",
  },
  {
    id: 2,
    title: "Annual Festival Celebration",
    description:
      "Support our annual festival celebrations with donations for decorations, food, and cultural programs.",
    target: "₹5,00,000",
    raised: "₹3,25,000",
    progress: 65,
    startDate: "April 1, 2023",
    endDate: "May 15, 2023",
    status: "Active",
  },
  {
    id: 3,
    title: "Community Kitchen Expansion",
    description: "Help us expand our community kitchen to serve more devotees and provide free meals to those in need.",
    target: "₹8,00,000",
    raised: "₹5,20,000",
    progress: 65,
    startDate: "February 10, 2023",
    endDate: "July 10, 2023",
    status: "Active",
  },
  {
    id: 4,
    title: "Educational Scholarships",
    description: "Support educational scholarships for underprivileged children in our community.",
    target: "₹3,00,000",
    raised: "₹3,00,000",
    progress: 100,
    startDate: "January 1, 2023",
    endDate: "March 31, 2023",
    status: "Completed",
  },
]

export default function CampaignsPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [selectedTab, setSelectedTab] = useState("active")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Campaigns</h2>
        <div className="flex items-center space-x-2">
          <Button onClick={() => setSelectedTab("new")}>
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="new">Create New</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {campaigns
              .filter((c) => c.status === "Active")
              .map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(campaign.title)}`}
                      alt={campaign.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="success">{campaign.status}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{campaign.title}</CardTitle>
                    <CardDescription>
                      {campaign.startDate} - {campaign.endDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{campaign.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Raised: {campaign.raised}</span>
                        <span>Target: {campaign.target}</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                      <div className="text-xs text-right text-muted-foreground">{campaign.progress}% Complete</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Manage Campaign</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {campaigns
              .filter((c) => c.status === "Completed")
              .map((campaign) => (
                <Card key={campaign.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(campaign.title)}`}
                      alt={campaign.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge>{campaign.status}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{campaign.title}</CardTitle>
                    <CardDescription>
                      {campaign.startDate} - {campaign.endDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{campaign.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Raised: {campaign.raised}</span>
                        <span>Target: {campaign.target}</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                      <div className="text-xs text-right text-muted-foreground">{campaign.progress}% Complete</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Report
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Campaign</CardTitle>
              <CardDescription>Set up a new fundraising campaign for your temple</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Campaign Title</Label>
                  <Input id="title" placeholder="Enter campaign title" />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your campaign" rows={4} />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="target">Target Amount (₹)</Label>
                  <Input id="target" type="number" placeholder="Enter target amount" />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="start-date"
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button id="end-date" variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="image">Campaign Image</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG or JPG (MAX. 2MB)</p>
                      </div>
                      <input id="image-upload" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSelectedTab("active")}>
                Cancel
              </Button>
              <Button>Create Campaign</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
