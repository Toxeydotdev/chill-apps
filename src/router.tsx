import { Header } from "@/components/Header/Header";
import { HomePage } from "@/pages/HomePage/HomePage";
import { MenuPage } from "@/pages/MenuPage/MenuPage";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

// Home route (Visit Us)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

// Menu route
const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: MenuPage,
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, menuRoute]);

// Create the router
export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
