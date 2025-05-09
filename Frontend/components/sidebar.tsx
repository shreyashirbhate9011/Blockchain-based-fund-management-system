"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Building2,
  CreditCard,
  Home,
  IndianRupee,
  Info,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Temple Info",
    icon: Building2,
    href: "/temple-info",
    color: "text-orange-500",
  },
  {
    label: "Donations",
    icon: IndianRupee,
    href: "/donations",
    color: "text-emerald-500",
  },
  {
    label: "Expenses",
    icon: CreditCard,
    href: "/expenses",
    color: "text-red-500",
  },
  {
    label: "Campaigns",
    icon: Users,
    href: "/campaigns",
    color: "text-violet-500",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "text-yellow-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full border-r bg-background">
      <div className="flex items-center justify-center p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-amber-600" />
          <span className="font-bold text-xl">Temple Admin</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === route.href ? "bg-accent" : "transparent",
              )}
            >
              <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
              <span>{route.label}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Info className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-medium">Sri Venkateswara Temple</p>
            <p className="text-xs text-muted-foreground">Admin Portal</p>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start mt-2">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  )
}
