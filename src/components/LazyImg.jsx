import React, { useRef, useState } from "react";
import { Image } from "react-bootstrap";

import styles from "../styles/LazyImg.module.css";

const LazyImg = ({ blurred, src, alt, srcSet, sizes }) => {
  const [isMainImgLoaded, setIsMainImgLoaded] = useState(false);

  const imgRef = useRef();

  const blurredImgStyles = {
    opacity: isMainImgLoaded ? 0 : 1,
    animation: isMainImgLoaded && "none",
  };

  return (
    <div className="position-relative">
      <Image
        className={`${styles.blurredImg} w-100 rounded position-absolute`}
        ref={imgRef}
        src={blurred}
        alt={alt}
        style={blurredImgStyles}
      />
      <Image
        className={`${styles.mainImg} w-100 rounded`}
        src={src}
        alt={alt}
        srcSet={srcSet && srcSet}
        sizes={sizes && sizes}
        loading="lazy"
        onLoad={() => {
          setIsMainImgLoaded(true);
        }}
      />
    </div>
  );
};

export default LazyImg;
