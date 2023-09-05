import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import MainImg from "./components/MainImg";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <MainImg />
    </div>
  );
}

export default App;
