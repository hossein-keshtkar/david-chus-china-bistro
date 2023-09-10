import { RouterProvider, createBrowserRouter } from "react-router-dom";

import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import Menu from "./components/menu/Menu";

function App() {
  const router = createBrowserRouter([
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
  ]);

  return (
    <div className={styles.App}>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
