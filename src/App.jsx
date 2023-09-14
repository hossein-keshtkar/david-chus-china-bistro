import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import styles from "./styles/App.module.css";
import { router } from "./components/router/router";
import FallBack from "./components/FallBack";

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
