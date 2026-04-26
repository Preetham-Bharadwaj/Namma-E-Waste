import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { SchedulePage } from "./pages/SchedulePage";
import { TrackPage } from "./pages/TrackPage";
import { ProfilePage } from "./pages/ProfilePage";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("nammaEWasteUser") === "authenticated";
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "/app",
        Component: Layout,
        children: [
          { index: true, Component: HomePage },
          { path: "schedule", Component: SchedulePage },
          { path: "track", Component: TrackPage },
          { path: "profile", Component: ProfilePage },
        ],
      },
    ],
  },
]);
