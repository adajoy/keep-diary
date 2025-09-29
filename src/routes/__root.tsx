/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'TanStack Start Starter',
			},
		],
	}),
	component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
	return (
		<QueryClientProvider client={queryClient}>
			<RootDocument>
				<Outlet />
			</RootDocument>
			<ReactQueryDevtools></ReactQueryDevtools>
		</QueryClientProvider>
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
