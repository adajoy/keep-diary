import { createFileRoute, useRouter } from "@tanstack/react-router"
import { useServerFn } from "@tanstack/react-start"
import { getDiaryDetail, deleteDiary } from "../server/services/diaryService"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowLeft, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

export const Route = createFileRoute("/diaries/$diaryId")({
  component: DiaryDetailPage,
})

function DiaryDetailPage() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { diaryId } = Route.useParams()
  const [userId, setUserId] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const storedUserId = localStorage.getItem("userId")
    setUserId(storedUserId)
    if (!storedUserId) {
      router.navigate({ to: "/signin" })
    }
  }, [router])

  const getDiary = useServerFn(getDiaryDetail)
  const { data, isLoading, error } = useQuery({
    queryKey: ["getDiaryDetail", diaryId],
    queryFn: () => getDiary({ data: { diaryId } }),
    enabled: !!userId,
  })

  const deleteDiaryFn = useServerFn(deleteDiary)
  const deleteMutation = useMutation({
    mutationKey: ["deleteDiary"],
    mutationFn: (data: { diaryId: string; userId: string }) =>
      deleteDiaryFn({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserDiaries"] })
      router.navigate({ to: "/diaries" })
    },
  })

  const handleDelete = () => {
    if (userId) {
      deleteMutation.mutate({ diaryId, userId })
    }
  }

  if (!isClient || !userId) {
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading diary...</div>
      </div>
    )
  }

  if (error || data?.code !== 0 || !data?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{data?.message || "Diary not found"}</div>
      </div>
    )
  }

  const diary = data.data

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.navigate({ to: "/diaries" })}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setDeleteDialogOpen(true)}
              className="gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-3xl">
              {diary.title || "Untitled"}
            </CardTitle>
            <CardDescription>
              Created: {new Date(diary.createdAt).toLocaleString()}
              {diary.updatedAt !== diary.createdAt && (
                <span className="ml-4">
                  Updated: {new Date(diary.updatedAt).toLocaleString()}
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none whitespace-pre-wrap">
              {diary.content}
            </div>
          </CardContent>
        </Card>
      </main>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Diary</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this diary? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
