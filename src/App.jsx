import { RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import { router } from "./components/router/router";
import FallBack from "./components/FallBack";

const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className={styles.App}>
      <Suspense fallback={<FallBack />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
