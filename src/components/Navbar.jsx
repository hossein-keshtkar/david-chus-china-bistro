import React, { useEffect, useState } from "react";
import { Container, Navbar, Collapse } from "react-bootstrap";

import Logo from "../assets/images/restaurant-logo_medium.png";
import styles from "../styles/Navbar.module.css";
import { RESIZE } from "../constants/keywords";

const MyNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const resizeHanler = () => {
    const winWidth = window.innerWidth;

    winWidth > 992 ? setIsExpanded(true) : setIsExpanded(false);
  };

  useEffect(() => {
    resizeHanler();

    window.addEventListener(RESIZE, resizeHanler);

    return () => window.removeEventListener(RESIZE, resizeHanler);
  }, []);

  return (
    <Navbar
      className={`${styles.Navbar} d-flex flex-row`}
      aria-controls="brand-name"
      aria-expanded={isExpanded}
      expand="lg"
    >
      <Container>
        {isExpanded && (
          <Navbar.Brand id="brand-name">
            <a href="#brand">
              <img
                src={Logo}
                alt="logo"
                class="pull-left visible-md visible-lg"
              />
            </a>
          </Navbar.Brand>
        )}
        <h1>Daivd Chu's China Bistro</h1>
      </Container>
      <Container>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
