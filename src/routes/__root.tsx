import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet /> {/* Dito lalabas ang mga sub-pages */}
      <TanStackRouterDevtools />
    </>
  ),
})