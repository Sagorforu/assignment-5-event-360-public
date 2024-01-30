import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import AdminLayout from "@/components/layouts/AdminLayout";
import CreateEvent from "@/pages/dashboard/EventsManagement/CreateEvent";
import GetAllEvent from "@/pages/dashboard/EventsManagement/GetAllEvent";
import Dashboard from "@/pages/dashboard/dashboard";
import { Navigate, createBrowserRouter } from "react-router-dom";
import CreateRecentEvent from "@/pages/dashboard/RecentEventManagement/CreateRecentEvent";
import GetAllRecentEvents from "@/pages/dashboard/RecentEventManagement/GetAllRecentEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "create-event",
        element: <CreateEvent />,
      },
      {
        path: "get-all-events",
        element: <GetAllEvent />,
      },
      {
        path: "create-recent-events",
        element: <CreateRecentEvent />,
      },
      {
        path: "get-all-recent-events",
        element: <GetAllRecentEvents />,
      },
    ],
  },
]);

export default router;
