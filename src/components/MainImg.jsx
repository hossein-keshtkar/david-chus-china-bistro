import React, { useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";

import imgLg from "../assets/images/jumbotron_1200.jpg";
import imgMd from "../assets/images/jumbotron_992.jpg";
import imgSm from "../assets/images/jumbotron_768.jpg";
import styles from "../styles/MainImg.module.css";

const MainImg = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const blurredImg = useRef();
  const img = useRef();

  const loaded = () => {
    console.log("hello");
    if (img.current.complete) {
      blurredImg.current.classList.add("loaded");
    }
  };

  useEffect(() => {
    console.log(img.current.complete);
    if (img.current.complete) setIsLoaded(true);
  }, []);

  return (
    <Container
      className={`${styles.blurredImg} ${
        isLoaded ? "loaded" : ""
      } d-flex align-items-center justify-content-center p-0`}
      ref={blurredImg}
    >
      <Image
        rounded
        src={imgSm}
        ref={img}
        srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
        sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
        alt="resturaunt"
        className={`${styles.MainImg} img-fluid`}
        loading="lazy"
      />
    </Container>
  );
};

export default MainImg;
