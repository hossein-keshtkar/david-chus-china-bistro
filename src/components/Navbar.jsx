import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import logo from "../assets/images/restaurant-logo_medium.png";
import logoLg from "../assets/images/restaurant-logo_large.png";
import star from "../assets/images/star-k-logo.png";
import styles from "../styles/Navbar.module.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="md" className={`${styles.Navbar}`}>
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
          <Container className="d-flex flex-column w-100">
            <h1 className={`${styles.navbarHeader} col-lg-7`}>
              DAVID CHU'S CHINA BISTRO
            </h1>
            <div>
              <div className="d-flex align-items-center">
                <img src={star} alt="start-k-logo" className={styles.star} />
                <span className={styles.kosher}>KOSHER CERTIFIED</span>
              </div>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="float-end"
              />
            </div>
          </Container>
          <Navbar.Collapse id="basic-navbar-nav" className="col-lg-5">
            <Nav className="d-flex justify-content-end align-items-center w-100">
              <Nav.Link href="#" className="d-md-none">
                Home
              </Nav.Link>
              <Nav.Link href="#menu">
                <span>Menu</span>
              </Nav.Link>
              <Nav.Link href="#about">
                <span>About</span>
              </Nav.Link>
              <Nav.Link href="#awards">
                <span>Awards</span>
              </Nav.Link>
              <Nav.Link
                id="phone"
                href="tel:410-602-5008"
                className="d-none d-lg-block"
              >
                <span>410-602-5008</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className={`${styles.tel} d-lg-none m-3 mb-1 border border-2 rounded-1 d-flex align-items-center`}
      >
        <a
          href="tel:410-602-5008"
          className="w-100 icon-link icon-link-hover p-2 d-block text-center fs-4 text-decoration-none"
        >
          410-602-5008
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone-outbound ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
          </svg>
        </a>
      </div>
      <div
        className="text-center text-light fs-6 d-lg-none"
        style={{ color: "#951c49" }}
      >
        * WE DELIVER
      </div>
    </>
  );
};

export default MyNavbar;
