import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/diaries")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
