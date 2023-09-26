import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/restaurant-logo_medium.png";
import logoLg from "../assets/images/restaurant-logo_large.png";
import star from "../assets/images/star-k-logo.png";
import styles from "../styles/Navbar.module.css";
import PhoneBtn from "./PhoneBtn";

const MyNavbar = () => {
  const homeApi = process.env.REACT_APP_HOME_API;
  const menuApi = process.env.REACT_APP_MENU_API;
  const awardsApi = process.env.REACT_APP_AWARDS_API;
  const aboutApi = process.env.REACT_APP_ABOUT_API;

  return (
    <>
      <Navbar expand="md" className={`${styles.Navbar}`}>
        <Container>
          <Navbar.Brand className="p-0 m-0">
            <Link to={homeApi}>
              <img
                src={logo}
                srcSet={`${logo} 1080w, ${logoLg} 1440w`}
                sizes="(max-width: 1080px) 100vw, 1440px"
                alt="brand-logo"
                className="collapse navbar-collapse me-2"
              />
            </Link>
          </Navbar.Brand>

          <Container className="d-flex flex-column w-100">
            <h1 className={`${styles.navbarHeader}`}>
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
              <Link
                className="link-dark text-decoration-none d-md-none active"
                to={homeApi}
              >
                <span>Home</span>
              </Link>
              <Link
                className="link-dark text-decoration-none me-md-2"
                to={menuApi}
              >
                <span>Menu</span>
              </Link>
              <Link
                className="link-dark text-decoration-none me-md-2"
                to={aboutApi}
              >
                <span>About</span>
              </Link>
              <Link className="link-dark text-decoration-none" to={awardsApi}>
                <span>Awards</span>
              </Link>
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

      <PhoneBtn />
    </>
  );
};

export default MyNavbar;
