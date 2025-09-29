import * as fs from 'node:fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start'
import { createDiaryEntry } from '../server/services/diaryService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addServerUser, getServerUsers } from '../server/services/user'

const filePath = 'count.txt'

async function readCount() {
	return parseInt(
		await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
		10,
	)
}

const getCount = createServerFn({
	method: 'GET',
}).handler(() => {
	return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
	.inputValidator((d: number) => d)
	.handler(async ({ data }) => {
		const count = await readCount()
		await fs.promises.writeFile(filePath, `${count + data}`)
	})

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => await getCount(),
})

function Home() {
	const router = useRouter()
	const state = Route.useLoaderData()

	const createEntry = useServerFn(createDiaryEntry)
	const { data } = useQuery({
		queryKey: ['createEntry'],
		queryFn: () => createEntry(),
	})

	const getUsers = useServerFn(getServerUsers)
	// const { data: users } = useQuery({
	// 	queryKey: ['getUsers'],
	// 	queryFn: () => getUsers(),
	// })

	const addUser = useServerFn(addServerUser)

	const mutation = useMutation({
		mutationKey: ['addUser'],
		mutationFn: () =>
			addUser({ data: { email: 'ada@example.com', password: 'password123' } }),
	})

	const handleClick = () => {
		// createDiaryEntry('My first entry', { content: 'Hello, world!' })
		createEntry()
	}

	const handleAddUser = () => {
		mutation.mutate()
	}

	const handleGetUsers = () => {
		getUsers().then(console.log)
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					updateCount({ data: 1 }).then(() => {
						router.invalidate()
					})
				}}
			>
				Add 1 to {state}?
			</button>
			{JSON.stringify(data)}
			<button type="button" onClick={handleClick}>
				createDiaryEntry
			</button>
			<button type="button" onClick={handleAddUser}>
				add user
			</button>
			<button type="button" onClick={handleGetUsers}>
				get users
			</button>
		</div>
	)
}
