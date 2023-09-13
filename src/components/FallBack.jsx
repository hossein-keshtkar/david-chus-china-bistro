import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import styles from "../styles/FallBack.module.css";

const FallBack = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (dots === "....") {
      setDots("");
    }
  }, [dots]);

  return (
    <Container
      className={`${styles.container} d-flex flex-column align-items-center justify-content-center`}
    >
      <Spinner animation="border" variant="light" />
      <h2 className={styles.header}>
        <div>Please wait</div>
        <div className={styles.dots}>{dots}</div>
      </h2>
    </Container>
  );
};

export default FallBack;
