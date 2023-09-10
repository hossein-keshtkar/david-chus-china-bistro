import { RouterProvider } from "react-router-dom";

import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { router } from "./components/router/router";
import { Suspense } from "react";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
