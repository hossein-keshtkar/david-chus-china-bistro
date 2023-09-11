import React, { useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";

import imgLg from "../../assets/images/jumbotron_1200.jpg";
import imgMd from "../../assets/images/jumbotron_992.jpg";
import imgSm from "../../assets/images/jumbotron_768.jpg";
import styles from "../../styles/MainImg.module.css";
import blurred from "../../assets/images/blury-resturant.png";

const MainImg = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const handleImgLoad = () => {
      setIsLoaded(imgRef.current.complete);
    };

    imgRef.current.addEventListener("load", handleImgLoad);

    return () => {
      imgRef.current.removeEventListener("load", handleImgLoad);
    };
  }, []);

  return (
    <Container
      className={`d-flex align-items-center justify-content-center mt-5 ${styles.Container}`}
    >
      <div
        className={`${styles.blurredImg} ${
          isLoaded ? styles.loaded : ""
        } w-100 h-100`}
      >
        <Image
          // src={imgSm}
          ref={imgRef}
          // srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
          sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
          width={"100%"}
          height={isLoaded ? "100%" : 300}
          alt="resturaunt"
          loading="lazy"
        />
      </div>
    </Container>
  );
};

export default MainImg;
