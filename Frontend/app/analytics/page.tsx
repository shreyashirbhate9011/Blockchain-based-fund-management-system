"use client"

import { Progress } from "@/components/ui/progress"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/overview"
import { ExpenseDistribution } from "@/components/expense-distribution"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DonationChart } from "@/components/donation-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="2023">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1,25,897</div>
                <p className="text-xs text-muted-foreground">+20.1% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹78,450</div>
                <p className="text-xs text-muted-foreground">+4.3% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹47,447</div>
                <p className="text-xs text-muted-foreground">+10.1% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Unique Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+18.2% from last year</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Monthly donations and expenses</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Expense Distribution</CardTitle>
                <CardDescription>How temple funds are being utilized</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseDistribution />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="donations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donation Trends</CardTitle>
              <CardDescription>Monthly donation patterns</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <DonationChart />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹2,450</div>
                <p className="text-xs text-muted-foreground">+5.2% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Largest Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹25,000</div>
                <p className="text-xs text-muted-foreground">From Suresh Iyer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Most Common Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">UPI</div>
                <p className="text-xs text-muted-foreground">65% of all donations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recurring Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground">31.8% of all donors</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Analysis</CardTitle>
              <CardDescription>Detailed breakdown of temple expenses</CardDescription>
            </CardHeader>
            <CardContent>
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

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Success rate of fundraising campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">75%</div>
                  <p className="text-muted-foreground">Average campaign success rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Temple Renovation Fund</CardTitle>
                <CardDescription>March 15, 2023 - June 30, 2023</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Raised: ₹9,75,000</span>
                    <span>Target: ₹15,00,000</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="text-xs text-right text-muted-foreground">65% Complete</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annual Festival Celebration</CardTitle>
                <CardDescription>April 1, 2023 - May 15, 2023</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Raised: ₹3,25,000</span>
                    <span>Target: ₹5,00,000</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="text-xs text-right text-muted-foreground">65% Complete</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational Scholarships</CardTitle>
                <CardDescription>January 1, 2023 - March 31, 2023</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Raised: ₹3,00,000</span>
                    <span>Target: ₹3,00,000</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <div className="text-xs text-right text-muted-foreground">100% Complete</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
