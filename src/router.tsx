import { createRouter, Navigate } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		// Redirect 404s to signin page
		defaultNotFoundComponent: () => <Navigate to="/signin" replace />,
	})

	return router
}
