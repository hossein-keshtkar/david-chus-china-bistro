import React, { useEffect, useState } from "react";
import { Container, Navbar, Collapse } from "react-bootstrap";

import Logo from "../assets/images/restaurant-logo_medium.png";
import styles from "../styles/Navbar.module.css";
import { RESIZE } from "../constants/keywords";

const MyNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const resizeHanler = (e) => {
    const winWidth = window.innerWidth;

    winWidth > 992 ? setIsExpanded(true) : setIsExpanded(false);
  };

  useEffect(() => {
    window.addEventListener(RESIZE, resizeHanler);

    return () => window.removeEventListener(RESIZE, resizeHanler);
  }, []);

  return (
    <Navbar
      className={`${styles.Navbar} h-90`}
      aria-controls="brand-logo"
      aria-expanded={isExpanded}
      expand="lg"
    >
      <Container>
        <Collapse in={isExpanded}>
          <Navbar.Brand id="brand-logo">
            <a href="brand">
              <img src={Logo} alt="brand-logo" />
            </a>
          </Navbar.Brand>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
