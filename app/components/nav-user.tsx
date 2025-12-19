import { LogOut } from "lucide-react"
import { useRouter } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("userEmail")
    router.navigate({ to: "/signin" })
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-sm text-sidebar-foreground/70 truncate px-2">
        {user.email}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleSignOut}
        className="w-full justify-start gap-2 text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
      >
        <LogOut className="h-4 w-4" />
        Sign out
      </Button>
    </div>
  )
}
