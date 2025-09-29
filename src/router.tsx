import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		// Provide a router-level default not-found component so the router
		// doesn't fall back to the overly generic built-in one.
		defaultNotFoundComponent: () => <div>Not Found</div>,
	})

	return router
}
