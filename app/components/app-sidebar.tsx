"use client"

import * as React from "react"
import { BookOpen, BarChart3 } from "lucide-react"
import { useRouter, useRouterState, Link } from "@tanstack/react-router"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  const location = useRouterState({
    select: (state) => state.location,
  })
  const [user, setUser] = React.useState<{
    name: string
    email: string
    avatar: string
  } | null>(null)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    // Get user info from localStorage
    const userId = localStorage.getItem("userId")
    const userEmail = localStorage.getItem("userEmail")
    
    if (userId && userEmail) {
      setUser({
        name: userEmail.split("@")[0],
        email: userEmail,
        avatar: "",
      })
    }
  }, [])

  const navMain = [
    {
      title: "Diaries",
      url: "/diaries",
      icon: BookOpen,
      isActive: location.pathname.startsWith("/diaries"),
    },
    {
      title: "Charts",
      url: "/charts",
      icon: BarChart3,
      isActive: location.pathname === "/charts",
    },
  ]

  // Use a default user if not loaded yet (for SSR/hydration)
  const displayUser = user || {
    name: "User",
    email: "",
    avatar: "",
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/diaries">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BookOpen className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Keep Diary</span>
                  <span className="truncate text-xs">Your Writing Journey</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        {isClient ? (
          user ? (
            <NavUser user={user} />
          ) : (
            <div className="flex flex-col gap-2 w-full px-2 py-2">
              <div className="text-sm text-sidebar-foreground/50">
                Not logged in
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col gap-2 w-full px-2 py-2">
            <div className="text-sm text-sidebar-foreground/50">Loading...</div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
