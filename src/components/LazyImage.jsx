import React, { useState } from "react";
import { Image } from "react-bootstrap";

import styles from "../styles/LazyImage.module.css";
import Shimmer from "./Shimmer";
import { LAZY, URL } from "../constants/keywords";

const LazyImage = ({
  bg,
  alt,
  img,
  children,
  width,
  height,
  style,
  srcSet,
  sizes,
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleLoad = () => {
    setIsImgLoaded(true);
  };

  const bgStyle = {
    backgroundImage: `${URL}(${bg})`,
  };

  const imgStyle = {
    opacity: isImgLoaded ? 1 : 0,
  };

  return (
    <div
      className={`${styles.container} rounded d-flex justify-content-center position-relative`}
      style={{ height: height, width: width, ...style }}
    >
      <div
        className={`${styles.background} position-absolute z-n1`}
        style={bgStyle}
      />
      <Image
        className={styles.img}
        srcSet={srcSet && srcSet}
        sizes={sizes && sizes}
        onLoad={handleLoad}
        style={imgStyle}
        loading={LAZY}
        alt={title}
        src={img}
      />
      {children}
      {!isImgLoaded && <Shimmer />}
    </div>
  );
};

export default LazyImage;
