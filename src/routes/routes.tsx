import { Navigate, RouteObject } from "react-router-dom";
import DashboardLayout from "layout/dashboard";
import NotFoundPage from "pages/not-found/index.page";
import AgentCreationPage from "pages/agent-creation/index.page";

const protectedRoutes: RouteObject[] = [
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: 'agent-creation', element: <AgentCreationPage /> },
    ],
  },
];

const publicRoutes: RouteObject[] = [
  { path: "404", element: <NotFoundPage /> },
  { path: "*", element: <Navigate to="/" /> },
];

export { publicRoutes, protectedRoutes };
