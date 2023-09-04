import React, { useEffect, useState } from "react";
import { Container, Navbar, Collapse } from "react-bootstrap";

import logo from "../assets/images/restaurant-logo_medium.png";
import star from "../assets/images/star-k-logo.png";
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
      className={`${styles.Navbar}`}
      aria-controls="brand-name"
      aria-expanded={isExpanded}
      expand="lg"
    >
      <Container className="d-flex flex-row">
        <div>
          {isExpanded && (
            <Navbar.Brand id="brand-name">
              <a href="#brand">
                <img
                  src={logo}
                  alt="logo"
                  class="pull-left visible-md visible-lg"
                />
              </a>
            </Navbar.Brand>
          )}
        </div>
        <div>
          <h1 className={`${styles.navbarHeader} navbar-header`}>
            Daivd Chu's China Bistro
          </h1>
          <div className="d-flex align-items-center">
            <span className="me-2">
              <img src={star} alt="start-k-logo" />
            </span>
            <div className="pt-1">KOSHER CERTIFIED</div>
          </div>
        </div>
        <div>
          {isExpanded && (
            <ul
              className={`${styles.list} d-flex flex-d-row align-items-center p-0 m-0`}
            >
              <li>Menu</li>
              <li>About</li>
              <li>Awards</li>
              <li>
                <h3 className="m-0">410 602 5008</h3>* We Deliver
              </li>
            </ul>
          )}
        </div>
        <div>
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
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
