import React, { useEffect, useState } from "react";
import { Container, Navbar, Collapse } from "react-bootstrap";

import logo from "../assets/images/restaurant-logo_medium.png";
import logoLg from "../assets/images/restaurant-logo_large.png";
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
      className={`${styles.Navbar} navbar navbar-expand-lg`}
      aria-controls="brand-name"
      aria-expanded={isExpanded}
      expand="lg"
    >
      <Container>
        <div className="d-flex flex-row">
          <Navbar.Brand className="collapse navbar-collapse" id="brand-name">
            <a className="nav-link" href="#brand">
              <img
                src={logoLg}
                srcSet={`${logo} 1080w, ${logoLg} 1440w`}
                sizes="(max-width: 1080px) 100vw, 1440px"
                alt="logo"
                className="pull-left visible-md visible-lg"
              />
            </a>
          </Navbar.Brand>

          <div className="navbar-text">
            <h2 className={`${styles.navbarHeader} navbar-header h2`}>
              DAVID CHU'S CHINA BISTRO
            </h2>
            <div className="d-flex flex-row align-items-center">
              <span className="me-2 navbar-header">
                <img src={star} alt="start-k-logo" />
              </span>
              KOSHER CERTIFIED
            </div>
          </div>
        </div>

        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link acitve visible-xs"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awards">
                Awards
              </a>
            </li>
            <li className="nav-item ms-2">
              410-602-5008
              <div>* We Deliver</div>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
