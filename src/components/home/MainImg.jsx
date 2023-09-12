import React, { useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";

import imgLg from "../../assets/images/jumbotron_1200.jpg";
import imgMd from "../../assets/images/jumbotron_992.jpg";
import imgSm from "../../assets/images/jumbotron_768.jpg";
import styles from "../../styles/MainImg.module.css";

const MainImg = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const handleImgLoad = () => {
      setIsLoaded(imgRef.current.complete);
    };

    const imgElement = imgRef.current;

    if (imgElement) imgElement.addEventListener("load", handleImgLoad);

    return () => {
      if (imgElement) imgElement.removeEventListener("load", handleImgLoad);
    };
  }, []);

  return (
    <Container className="d-flex align-items-center justify-content-center my-3">
      <div className={`${styles.blurredImg} ${isLoaded ? styles.loaded : ""}`}>
        <Image
          // src={imgSm}
          ref={imgRef}
          // srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
          sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
          alt="resturaunt"
          loading="lazy"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </Container>
  );
};

export default MainImg;
