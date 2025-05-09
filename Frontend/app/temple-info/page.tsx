"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Facebook, Globe, Instagram, Twitter, Upload } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { TimePicker } from "@/components/time-picker"

export default function TempleInfoPage() {
  const [selectedTab, setSelectedTab] = useState("general")

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Temple Information</h2>
        <div className="flex items-center space-x-2">
          <Button>Save Changes</Button>
        </div>
      </div>

      <Tabs defaultValue="general" value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="timings">Timings</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
              <CardDescription>Update your temple's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="temple-name">Temple Name</Label>
                <Input id="temple-name" defaultValue="Sri Venkateswara Temple" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="temple-location">Location</Label>
                <Input id="temple-location" defaultValue="Tirupati, Andhra Pradesh" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="temple-description">Description</Label>
                <Textarea
                  id="temple-description"
                  rows={5}
                  defaultValue="Sri Venkateswara Temple is a Hindu temple situated in the hill town of Tirumala at Tirupati in Tirupati district of Andhra Pradesh, India. The Temple is dedicated to Venkateswara, a form of Vishnu, who is believed to have appeared here to save mankind from trials and troubles of Kali Yuga."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="temple-history">History</Label>
                <Textarea
                  id="temple-history"
                  rows={5}
                  defaultValue="The temple is believed to have been constructed over a period starting from 300 AD. The Pallavas, the Cholas, the Pandyas, the Vijayanagara Empire, and the rulers of Mysore have all contributed to the development and upkeep of the temple over the centuries."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update contact details for devotees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="temple-email">Email</Label>
                <Input id="temple-email" type="email" defaultValue="contact@srivenkateswara.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="temple-phone">Phone</Label>
                <Input id="temple-phone" type="tel" defaultValue="+91 877 2277777" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="temple-website">Website</Label>
                <Input id="temple-website" type="url" defaultValue="https://www.tirumala.org" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Temple Timings</CardTitle>
              <CardDescription>Set opening and closing times for different ceremonies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Morning Darshan</Label>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <TimePicker defaultValue="03:30 AM" />
                      <span className="px-2">to</span>
                      <TimePicker defaultValue="11:30 AM" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Evening Darshan</Label>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <TimePicker defaultValue="12:30 PM" />
                      <span className="px-2">to</span>
                      <TimePicker defaultValue="08:30 PM" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Special Ceremonies</Label>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="suprabhatam">Suprabhatam</Label>
                        <TimePicker defaultValue="03:00 AM" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="archana">Archana</Label>
                        <TimePicker defaultValue="07:00 AM" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="aarti">Evening Aarti</Label>
                        <TimePicker defaultValue="07:00 PM" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shayan">Shayan Aarti</Label>
                        <TimePicker defaultValue="09:00 PM" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Temple Images</CardTitle>
              <CardDescription>Upload images of your temple</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative aspect-video rounded-md overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Temple front view"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Replace
                    </Button>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs">
                    Main Entrance
                  </div>
                </div>

                <div className="relative aspect-video rounded-md overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Temple interior"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Replace
                    </Button>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs">
                    Main Sanctum
                  </div>
                </div>

                <div className="relative aspect-video rounded-md overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Temple aerial view"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Replace
                    </Button>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs">Aerial View</div>
                </div>
              </div>

              <div className="mt-6">
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Image
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Temple Videos</CardTitle>
              <CardDescription>Upload videos of ceremonies and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative aspect-video rounded-md overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Video placeholder"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="outline" size="icon" className="rounded-full bg-background/80 h-12 w-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-background/80 px-3 py-2 rounded text-sm">
                    Annual Festival Highlights
                  </div>
                </div>

                <div className="mt-4">
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Video
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect your temple's social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4 text-blue-600" />
                  Facebook
                </Label>
                <Input id="facebook" defaultValue="https://facebook.com/srivenkateswara" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-pink-600" />
                  Instagram
                </Label>
                <Input id="instagram" defaultValue="https://instagram.com/srivenkateswara" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter" className="flex items-center gap-2">
                  <Twitter className="h-4 w-4 text-sky-500" />
                  Twitter
                </Label>
                <Input id="twitter" defaultValue="https://twitter.com/srivenkateswara" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website" className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  Website
                </Label>
                <Input id="website" defaultValue="https://www.tirumala.org" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Social Links</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
