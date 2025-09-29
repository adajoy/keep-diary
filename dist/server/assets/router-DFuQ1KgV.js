import {
	createRootRoute,
	Outlet,
	HeadContent,
	Scripts,
	createFileRoute,
	lazyRouteComponent,
	createRouter,
} from '@tanstack/react-router';
import { jsx, jsxs } from 'react/jsx-runtime';
import { c as createServerFn, a as createServerRpc } from '../server.js';
import * as fs from 'node:fs';
const Route$2 = createRootRoute({
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
});
function RootComponent() {
	return /* @__PURE__ */ jsx(RootDocument, {
		children: /* @__PURE__ */ jsx(Outlet, {}),
	});
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs('html', {
		children: [
			/* @__PURE__ */ jsx('head', {
				children: /* @__PURE__ */ jsx(HeadContent, {}),
			}),
			/* @__PURE__ */ jsxs('body', {
				children: [children, /* @__PURE__ */ jsx(Scripts, {})],
			}),
		],
	});
}
const $$splitComponentImporter$1 = () => import('./signin-B-p9fsxV.js');
const Route$1 = createFileRoute('/signin')({
	component: lazyRouteComponent($$splitComponentImporter$1, 'component'),
});
const $$splitComponentImporter = () => import('./index-4W2iqLe4.js');
const filePath = 'count.txt';
async function readCount() {
	return parseInt(
		await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
	);
}
const getCount_createServerFn_handler = createServerRpc(
	'src_routes_index_tsx--getCount_createServerFn_handler',
	(opts, signal) => {
		return getCount.__executeServer(opts, signal);
	},
);
const getCount = createServerFn({
	method: 'GET',
}).handler(getCount_createServerFn_handler, () => {
	return readCount();
});
const Route = createFileRoute('/')({
	component: lazyRouteComponent($$splitComponentImporter, 'component'),
	loader: async () => await getCount(),
});
const SigninRoute = Route$1.update({
	id: '/signin',
	path: '/signin',
	getParentRoute: () => Route$2,
});
const IndexRoute = Route.update({
	id: '/',
	path: '/',
	getParentRoute: () => Route$2,
});
const rootRouteChildren = {
	IndexRoute,
	SigninRoute,
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	const router2 = createRouter({
		routeTree,
		scrollRestoration: true,
	});
	return router2;
}
const router = /* @__PURE__ */ Object.freeze(
	/* @__PURE__ */ Object.defineProperty(
		{
			__proto__: null,
			getRouter,
		},
		Symbol.toStringTag,
		{ value: 'Module' },
	),
);
export { Route as R, router as r };
