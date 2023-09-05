import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import logo from "../assets/images/restaurant-logo_medium.png";
import logoLg from "../assets/images/restaurant-logo_large.png";
import star from "../assets/images/star-k-logo.png";
import styles from "../styles/Navbar.module.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className={`${styles.Navbar}`}>
      <Container>
        <Navbar.Brand href="#" className="p-0 m-0">
          <img
            src={logo}
            srcSet={`${logo} 1080w, ${logoLg} 1440w`}
            sizes="(max-width: 1080px) 100vw, 1440px"
            alt="brand-logo"
            className="collapse navbar-collapse me-2"
          />
        </Navbar.Brand>
        <div className="d-flex flex-column w-100">
          <h1 className={`${styles.navbarHeader} fs-4 col-lg-7`}>
            DAVID CHU'S CHINA BISTRO
          </h1>
          <div>
            <div className="d-flex align-items-center">
              <img src={star} alt="start-k-logo" className="me-1" />
              <span className="fs-6">KOSHER CERTIFIED</span>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className={`${styles.Toggle} float-end`}
            />
          </div>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className=" col-lg-5">
          <Nav className="d-flex justify-content-end align-items-center w-100">
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
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
