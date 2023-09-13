import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";

const LazyImage = ({ blurred, src, alt, srcSet, sizes }) => {
  const [isMainImgLoaded, setIsMainImgLoaded] = useState(false);

  const imgRef = useRef();

  const mainImgStyles = {
    aspectRatio: "2/1.2",
  };

  const blurredImgStyles = {
    aspectRatio: "2/1.2",
    opacity: isMainImgLoaded ? 0 : 1,
    transition: "opacity 250ms ease",
  };

  return (
    <div className="position-relative">
      <Image
        className="w-100 rounded position-absolute"
        ref={imgRef}
        src={blurred}
        alt={alt}
        style={blurredImgStyles}
      />
      <Image
        className="w-100 rounded"
        src={src}
        alt={alt}
        srcSet={srcSet && srcSet}
        sizes={sizes && sizes}
        loading="lazy"
        style={mainImgStyles}
        onLoad={() => {
          setIsMainImgLoaded(true);
        }}
      />
    </div>
  );
};

export default LazyImage;
