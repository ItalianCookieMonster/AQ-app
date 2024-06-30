import { createBrowserRouter } from "react-router-dom";

import Welcome from "@/pages/Welcome/Welcome";
import Homepage from "@/pages/Hompage/Homepage";
import Layout from "../layout/Layout";
import Layout2 from "../layout/Layout2";
import ProfileForm from "@/pages/ProfileForm/ProfileForm";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Task1 from "@/pages/Task1/Task1";
import Task2 from "@/pages/Task2/Task2";
import Task3 from "@/pages/Task3/Task3";
import ApiDoc from "@/pages/ApiDoc/ApiDoc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/form",
        element: <ProfileForm />,
      },
    ],
  },
  {
    path: "/home",
    element: <Layout2 />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
        children: [],
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout2 />,
    children: [
      {
        path: "/auth/home",
        element: <Homepage />,
      },
      {
        path: "/auth/about",
        element: <About />,
      },
      {
        path: "/auth/contact",
        element: <Contact />,
      },
      {
        path: "/auth/task1",
        element: <Task1 />,
      },
      {
        path: "/auth/task2",
        element: <Task2 />,
      },
      {
        path: "/auth/task3",
        element: <Task3 />,
      },
      {
        path: "/auth/apidoc",
        element: <ApiDoc />,
      },
    ],
  },
]);

export default router;
