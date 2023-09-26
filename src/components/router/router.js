import { createHashRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../home/HomePage"));
const Login = lazy(() => import("../login/LoginPage"));
const Menu = lazy(() => import("../menu/MenuPage"));
const Products = lazy(() => import("../menu/Products"));
const NotFound = lazy(() => import("../NotFound"));
const Awards = lazy(() => import("../awards/Awards"));
const About = lazy(() => import("../about/About"));

const homeApi = process.env.REACT_APP_HOME_API;
const loginApi = process.env.REACT_APP_ADMIN_API;
const menuApi = process.env.REACT_APP_MENU_API;
const productsApi = process.env.REACT_APP_PRODUCT_API;
const awardsApi = process.env.REACT_APP_AWARDS_API;
const aboutApi = process.env.REACT_APP_ABOUT_API;

const routes = [
  {
    path: homeApi,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: loginApi,
    element: <Login />,
  },
  {
    path: awardsApi,
    element: <Awards />,
  },
  {
    path: aboutApi,
    element: <About />,
  },
  {
    path: menuApi,
    element: <Menu />,
  },
  {
    path: productsApi,
    element: <Products />,
  },
];

export const router = createHashRouter(routes, {
  basename: homeApi,
});
