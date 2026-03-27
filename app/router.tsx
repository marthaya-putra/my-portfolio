import { createRouter as createRouterOrig } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

export function createRouter() {
  return createRouterOrig({
    routeTree,
    scrollRestoration: true,
  })
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
