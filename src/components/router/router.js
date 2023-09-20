import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Error from "../Error";

const Home = lazy(() => import("../home/HomePage"));
const Login = lazy(() => import("../login/LoginPage"));
const Menu = lazy(() => import("../menu/MenuPage"));
const Specials = lazy(() => import("../specials/SpecialsPage"));
const Products = lazy(() => import("../menu/Products"));

const homeApi = process.env.REACT_APP_HOME_API;
const loginApi = process.env.REACT_APP_ADMIN_API;
const menuApi = process.env.REACT_APP_MENU_API;
const specialsApi = process.env.REACT_APP_SPECIALS_API;
const productsApi = process.env.REACT_APP_PRODUCT_API;

export const router = createBrowserRouter([
  {
    path: homeApi,
    element: <Home />,
  },
  {
    path: loginApi,
    element: <Login />,
  },
  {
    path: menuApi,
    element: <Menu />,
  },
  {
    path: specialsApi,
    element: <Specials />,
  },
  {
    path: productsApi,
    element: <Products />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
