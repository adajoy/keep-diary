import { createFileRoute, useRouter } from "@tanstack/react-router"
import { useServerFn } from "@tanstack/react-start"
import { createDiaryEntry } from "../server/services/diaryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export const Route = createFileRoute("/diaries/new")({
  component: NewDiaryPage,
})

function NewDiaryPage() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [isClient, setIsClient] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    setIsClient(true)
  }, [router])

  const createDiary = useServerFn(createDiaryEntry)
  const createMutation = useMutation({
    mutationKey: ["createDiary"],
    mutationFn: (data: { title?: string; content: string }) =>
      createDiary({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserDiaries"] })
      router.navigate({ to: "/diaries" })
    },
    onError: (error: any) => {
      setError(error.message || "Failed to create diary")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!content.trim()) {
      setError("Content is required")
      return
    }

    createMutation.mutate({
      title: title.trim() || undefined,
      content: content.trim(),
    })
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.navigate({ to: "/diaries" })}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto w-full">
          <CardHeader>
            <CardTitle>Write New Diary</CardTitle>
            <CardDescription>
              Share your thoughts and experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-sm text-red-500 bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="title">Title (Optional)</Label>
                <Input
                  id="title"
                  placeholder="Give your diary entry a title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your diary entry here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[300px]"
                  required
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.navigate({ to: "/diaries" })}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={createMutation.isPending}>
                  {createMutation.isPending ? "Saving..." : "Save Diary"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
