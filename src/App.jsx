import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
