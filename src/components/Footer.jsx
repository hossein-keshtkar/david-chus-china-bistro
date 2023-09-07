import React from "react";
import { Container } from "react-bootstrap";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  console.log(Date());
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className="row">
          <div className="col-md-4 col-sm-12 p-md-5 p-4">
            <h4>Hours:</h4>
            <div>Sun-Thurs: 11:15am - 10:00pm</div>
            <div className="mt-3 mb-3">Fri: 11:15am - 2:30pm</div>
            <div>Saturday Closed</div>
          </div>
          <div className="col-md-4 col-sm-12 p-md-5 p-4">
            <h4>Address:</h4>
            <div>7105 Reisterstown Road</div>
            <div>Baltimore, MD 21215</div>
            <div>
              * Delivery area within 3-4 miles, with minimum order of $20 plus
              $3 charge for all deliveries.
            </div>
          </div>
          <div className="col-md-4 col-sm-12 p-md-5 p-4">
            <div>
              "The best Chinese restaurant I've been to! And that's saying a
              lot, since I've been to many!"
            </div>
            <div>
              "Amazing food! Great service! Couldn't ask for more! I'll be back
              again and again!"
            </div>
          </div>
          <div className="col-12 text-center mb-5">
            © Copyright David Chu's China Bistro {Date()} |{" "}
            <a href="admin/login">Admin</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
