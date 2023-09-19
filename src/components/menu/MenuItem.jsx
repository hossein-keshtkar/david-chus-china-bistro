import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../../styles/MenuItem.module.css";
import Shimmer from "../Shimmer";

const MenuItem = ({ bg, img, title, to, height, width, style }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleLoad = () => {
    setIsImgLoaded(true);
  };

  const size = {
    height: height && height,
    width: width && width,
  };

  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };

  const imgStyle = {
    opacity: isImgLoaded ? 1 : 0,
  };

  return (
    <Link
      className={`${styles.container} link link-light rounded d-flex justify-content-center my-3`}
      style={style}
      to={to}
    >
      <div
        className="d-flex justify-content-center position-relative"
        style={size}
      >
        <div
          className={`${styles.background} rounded position-absolute z-n1`}
          style={{ ...bgStyle, ...size }}
        />
        <Image
          height={height && height}
          width={width && width}
          className={styles.img}
          onLoad={handleLoad}
          style={imgStyle}
          loading="lazy"
          alt={title}
          src={img}
          rounded
        />
        <div
          className={`${styles.title} rounded-bottom position-absolute bottom-0 text-center py-1`}
        >
          {title ? title : "?"}
        </div>
        {!isImgLoaded && <Shimmer />}
      </div>
    </Link>
  );
};

export default MenuItem;
