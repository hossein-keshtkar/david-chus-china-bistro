import React from "react";
import { Container } from "react-bootstrap";

import HomeRow from "./HomeRow";
import imgLg from "../../assets/images/jumbotron_1200.avif";
import imgMd from "../../assets/images/jumbotron_992.avif";
import imgSm from "../../assets/images/jumbotron_768.avif";
import bg from "../../assets/images/blury-resturant.png";
import styles from "../../styles/HomePage.module.css";
import Page from "../Page";
import LazyImage from "../LazyImage";

const Home = () => {
  return (
    <Page>
      <Container className={`${styles.Container} mt-3`}>
        <LazyImage
          bg={bg}
          src={imgSm}
          srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
          sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
          style={{ aspectRatio: "2/1.2" }}
          loading={"eager"}
          width={"100%"}
          height={"auto"}
          alt={"restaurant"}
        />
        <HomeRow />
      </Container>
    </Page>
  );
};

export default Home;
