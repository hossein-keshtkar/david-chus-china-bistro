import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";

const LazyImage = ({ blurred, src, alt }) => {
  const [isMainImgLoaded, setIsMainImgLoaded] = useState(false);

  const style = {
    aspectRatio: "2/1.2",
  };

  const imgRef = useRef();

  return (
    <div className="position-relative">
      <Image
        className="w-100 rounded position-absolute"
        ref={imgRef}
        src={blurred}
        alt={alt}
        style={style}
      />
      <Image
        className="w-100 rounded"
        src={src}
        alt={alt}
        style={style}
        onLoad={() => {
          setIsMainImgLoaded(true);
        }}
      />
    </div>
  );
};

export default LazyImage;
