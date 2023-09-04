import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import logo from "../assets/images/restaurant-logo_medium.png";
import logoLg from "../assets/images/restaurant-logo_large.png";
import star from "../assets/images/star-k-logo.png";
import styles from "../styles/Navbar.module.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className={styles.Navbar}>
      <Container>
        <Navbar.Brand href="#" className="d-flex flex-row">
          <img
            src={logo}
            srcSet={`${logo} 1080w, ${logoLg} 1440w`}
            sizes="(max-width: 1080px) 100vw, 1440px"
            alt="brand-logo"
            className="collapse navbar-collapse me-2"
          />
          <div className="d-flex flex-column justify-content-center">
            <h1 className={`${styles.navbarHeader} fs-3`}>
              DAVID CHU'S CHINA BISTRO
            </h1>
            <div>
              <img src={star} alt="start-k-logo" />
              <span className="fs-6">KOSHER CERTIFIED</span>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-100">
            <Nav.Link href="#" className="d-lg-none">
              HOME
            </Nav.Link>
            <Nav.Link href="#menu">
              <span className="fs-6">MENU</span>
            </Nav.Link>
            <Nav.Link href="#about">
              <span className="fs-6">ABOUT</span>
            </Nav.Link>
            <Nav.Link href="#awards">
              <span className="fs-6">AWARDS</span>
            </Nav.Link>
            <Nav.Link
              id="phone"
              href="tel:410-602-5008"
              className="d-none d-lg-block"
            >
              <span className="fs-6">410-602-5008</span>

              {/* <div>* We Deliver</div> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
