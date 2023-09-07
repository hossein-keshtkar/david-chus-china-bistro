import React from "react";
import { Container, Image } from "react-bootstrap";

import menuImg from "../../assets/images/menu-tile.jpg";
import specialsImg from "../../assets/images/specials-tile.jpg";
import styles from "./BottomSection.module.css";

const HomePageBottomSection = () => {
  return (
    <Container className="my-5">
      <div className={`${styles.row} row`}>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3 d-flex align-items-center justify-content-center">
          <Image src={menuImg} className={`${styles.menuImg}`} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3 d-flex align-items-center justify-content-center">
          <Image src={specialsImg} className={styles.specials} />
        </div>
        <div className="col-lg-4 col-md-12 mb-3 d-flex align-items-center justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675063579344!2d-76.71426302412522!3d39.36359441906242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid%20Chu&#39;s%20China%20Bistro!5e0!3m2!1sen!2snl!4v1694054215589!5m2!1sen!2snl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default HomePageBottomSection;
