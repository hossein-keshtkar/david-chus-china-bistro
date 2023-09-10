import { createBrowserRouter } from "react-router-dom";

import HomePage from "../home/HomePage";
import Login from "../login/Login";
import Menu from "../menu/Menu";
import Specials from "../specials/Specials";

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
