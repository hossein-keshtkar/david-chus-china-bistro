import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../../styles/MenuItem.module.css";
import Shimmer from "../Shimmer";

const MenuItem = ({ bgImg, img, to, title }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleLoad = () => {
    setIsImgLoaded(true);
  };

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  const imgStyle = {
    opacity: isImgLoaded ? 1 : 0,
  };

  return (
    <div className="col-lg-3 col-md-4 d-flex align-items-center justify-content-center">
      <Link
        className={`${styles.container} link link-light rounded d-flex justify-content-center my-3`}
        to={to && to}
      >
        <div className="d-flex justify-content-center position-relative">
          <div
            style={bgStyle}
            className={`${styles.background} rounded position-absolute z-n1`}
          />
          <Image
            className={styles.img}
            src={img}
            style={imgStyle}
            rounded
            onLoad={handleLoad}
            loading="lazy"
          />
          <div
            className={`${styles.title} rounded-bottom position-absolute bottom-0 text-center py-1`}
          >
            {title ? title : "?"}
          </div>
          {!isImgLoaded && <Shimmer />}
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
