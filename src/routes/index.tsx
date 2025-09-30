import { createFileRoute } from "@tanstack/react-router"
import { useServerFn } from "@tanstack/react-start"
import { createDiaryEntry } from "../server/services/diaryService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { addServerUser, getServerUsers } from "../server/services/user"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const createEntry = useServerFn(createDiaryEntry)
  const createEntryMutation = useMutation({
    mutationKey: ["createEntry"],
    mutationFn: () => createEntry(),
  })

  const getUsers = useServerFn(getServerUsers)
  const { data } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers(),
  })

  const addUser = useServerFn(addServerUser)

  const addUserMutation = useMutation({
    mutationKey: ["addUser"],
    mutationFn: () =>
      addUser({ data: { email: "ada@example.com", password: "password123" } }),
  })

  return (
    <div>
      {JSON.stringify(data)}
      <Button type="button" onClick={() => createEntryMutation.mutate()}>
        createDiaryEntry
      </Button>
      <Button
        type="button"
        loading={addUserMutation.isPending}
        onClick={() => addUserMutation.mutate()}
      >
        add user
      </Button>
    </div>
  )
}
