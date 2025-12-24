"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useRouterState } from "@tanstack/react-router"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useRouterState({
    select: (state) => state.location,
  })
  console.log(location)
  const nonSidebarRoutes = ["/signin"]
  const isNonSidebarRoute = nonSidebarRoutes.some((route) =>
    location.pathname.startsWith(route)
  )
  return isNonSidebarRoute ? (
    children
  ) : (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
