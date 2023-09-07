import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
