import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../home/HomePage"));
const Login = lazy(() => import("../login/Login"));
const Menu = lazy(() => import("../menu/Menu"));
const Specials = lazy(() => import("../specials/Specials"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/specials",
    element: <Specials />,
  },
]);
