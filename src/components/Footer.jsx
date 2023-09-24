import React from "react";
import { Container } from "react-bootstrap";

import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const admin = process.env.REACT_APP_ADMIN_API;

  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={`${styles.columns} row text-center text-md-start`}>
          <div className="col-md-4 col-sm-12 p-md-5 px-md-3 p-4">
            <h4>Hours:</h4>
            <div>Sun-Thurs: 11:15am - 10:00pm</div>
            <div className="mt-3 mb-3">Fri: 11:15am - 2:30pm</div>
            <div>Saturday Closed</div>
          </div>
          <div className="col-md-4 col-sm-12 p-md-5 px-md-3 p-4">
            <h4>Address:</h4>
            <div>7105 Reisterstown Road</div>
            <div className="mt-3 mb-3">Baltimore, MD 21215</div>
            <div className={styles.delivery}>
              * Delivery area within 3-4 miles, with minimum order of $20 plus
              $3 charge for all deliveries.
            </div>
          </div>
          <div className="col-md-4 col-sm-12 p-md-5 px-md-3 p-4">
            <div>
              <em>
                "The best Chinese restaurant I've been to! And that's saying a
                lot, since I've been to many!"
              </em>
            </div>
            <div className="mt-3 mb-3">
              <em>
                "Amazing food! Great service! Couldn't ask for more! I'll be
                back again and again!"
              </em>
            </div>
          </div>
          <div className="col-12 text-center mb-5 mt-3" style={{ border: 0 }}>
            © Copyright David Chu's China Bistro {year} |{" "}
            <Link
              className="link-light link-underline-primary link-offset-1"
              to={admin}
            >
              Admin
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
