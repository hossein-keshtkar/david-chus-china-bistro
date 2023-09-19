import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error from "../Error";

const Home = lazy(() => import("../home/HomePage"));
const Login = lazy(() => import("../login/LoginPage"));
const Menu = lazy(() => import("../menu/MenuPage"));
const Specials = lazy(() => import("../specials/SpecialsPage"));
const Products = lazy(() => import("../menu/Products"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login/admin",
    element: <Login />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/specials",
    element: <Specials />,
    errorElement: <Error />,
  },
  {
    path: "/menu/:id",
    element: <Products />,
    errorElement: <Error />,
  },
]);
