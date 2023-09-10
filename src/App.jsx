import { RouterProvider } from "react-router-dom";

import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { router } from "./components/router/router";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
