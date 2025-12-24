/// <reference types="vite/client" />
import type { ReactNode } from "react"
import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  Navigate,
} from "@tanstack/react-router"
import appCss from "../../app/styles/app.css?url"
import { AppLayout } from "@/components/app-layout"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content:
          "Keep Diary - A personal diary and journal application to record your thoughts, memories, and daily experiences.",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <Navigate to="/signin" replace />,
})

function RootComponent() {
  return (
    <>
      <RootDocument>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </RootDocument>
      <ReactQueryDevtools></ReactQueryDevtools>
    </>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
