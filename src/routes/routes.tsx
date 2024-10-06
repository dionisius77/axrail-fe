import { Navigate, RouteObject } from "react-router-dom";
import DashboardLayout from "layout/dashboard";
import NotFoundPage from "pages/not-found/index.page";

const protectedRoutes: RouteObject[] = [
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: 'agent-creation', element: <>Agent Creation Page</> },
    ],
  },
];

const publicRoutes: RouteObject[] = [
  { path: "404", element: <NotFoundPage /> },
  { path: "*", element: <Navigate to="/" /> },
];

export { publicRoutes, protectedRoutes };
