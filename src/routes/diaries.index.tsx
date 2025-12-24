import {
  createFileRoute,
  useRouter,
  Outlet,
  useRouterState,
} from "@tanstack/react-router"
import { useServerFn } from "@tanstack/react-start"
import { getUserDiaries, deleteDiary } from "../server/services/diaryService"
import {
  useQuery,
  useQueryClient,
  useMutation,
  useSuspenseQuery,
  queryOptions,
} from "@tanstack/react-query"
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
import { Plus, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { SidebarTrigger } from "@/components/ui/sidebar"

const diariesQueryOptions = () =>
  queryOptions({
    queryKey: ["getUserDiaries"],
    queryFn: () => getUserDiaries(),
  })

export const Route = createFileRoute("/diaries/")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(diariesQueryOptions())
  },
  component: DiariesPage,
})

function DiariesPage() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [diaryToDelete, setDiaryToDelete] = useState<string | null>(null)

  const { data } = useSuspenseQuery(diariesQueryOptions())

  const deleteDiaryFn = useServerFn(deleteDiary)
  const deleteMutation = useMutation({
    mutationKey: ["deleteDiary"],
    mutationFn: (data: { diaryId: string }) => deleteDiaryFn({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserDiaries"] })
      setDeleteDialogOpen(false)
      setDiaryToDelete(null)
    },
  })

  const handleDeleteClick = (e: React.MouseEvent, diaryId: string) => {
    e.stopPropagation()
    setDiaryToDelete(diaryId)
    setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    if (diaryToDelete) {
      deleteMutation.mutate({ diaryId: diaryToDelete })
    }
  }

  const diaries = data?.code === 0 ? data.data : []

  return (
    <div className="min-h-screen">
      <>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center justify-between flex-1">
                <h1 className="text-2xl font-bold">My Diaries</h1>
                <Button
                  onClick={() => router.navigate({ to: "/diaries/new" })}
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add New Diary
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {diaries.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No diaries yet. Create your first diary entry!
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {diaries.map((diary: any) => (
              <Card
                key={diary.id}
                className="cursor-pointer hover:shadow-lg transition-shadow relative group"
                onClick={() => router.navigate({ to: `/diaries/${diary.id}` })}
              >
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  onClick={(e) => handleDeleteClick(e, diary.id)}
                  aria-label={`Delete diary: ${diary.title || "Untitled"}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    {diary.title || "Untitled"}
                  </CardTitle>
                  <CardDescription>
                    {new Date(diary.createdAt).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {diary.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Diary</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this diary? This action cannot
                  be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDeleteDialogOpen(false)
                    setDiaryToDelete(null)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleConfirmDelete}
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </>
    </div>
  )
}
