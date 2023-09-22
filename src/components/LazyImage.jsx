import React, { useState } from "react";
import { Image } from "react-bootstrap";

import styles from "../styles/LazyImage.module.css";
import Shimmer from "./Shimmer";

const LazyImage = ({ bg, title, img, children, width, height }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleLoad = () => {
    setIsImgLoaded(true);
  };

  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };

  const imgStyle = {
    opacity: isImgLoaded ? 1 : 0,
  };

  return (
    <div
      className={`${styles.container} rounded d-flex justify-content-center position-relative`}
      style={{ height: height, width: width }}
    >
      <div
        className={`${styles.background} position-absolute z-n1`}
        style={bgStyle}
      />
      <Image
        className={styles.img}
        onLoad={handleLoad}
        style={imgStyle}
        loading="lazy"
        alt={title}
        src={img}
      />
      {children}
      {!isImgLoaded && <Shimmer />}
    </div>
  );
};

export default LazyImage;
