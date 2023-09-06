import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";

import imgLg from "../assets/images/jumbotron_1200.jpg";
import imgMd from "../assets/images/jumbotron_992.jpg";
import imgSm from "../assets/images/jumbotron_768.jpg";
import bluryImg from "../assets/images/blury-resturant.png";
import styles from "../styles/MainImg.module.css";

const MainImg = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {};

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Image
        rounded
        src={imgSm}
        srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
        sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
        alt="resturaunt"
        className={`${styles.MainImg} img-fluid mt-3`}
      />
    </Container>
  );
};

export default MainImg;
