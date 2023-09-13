import React from "react";
import { Container } from "react-bootstrap";

import BottomSection from "./BottomSection";
import MyNavbar from "../Navbar";
import Footer from "../Footer";
import imgLg from "../../assets/images/jumbotron_1200.jpg";
import imgMd from "../../assets/images/jumbotron_992.jpg";
import imgSm from "../../assets/images/jumbotron_768.jpg";
import blurred from "../../assets/images/blury-resturant.png";
import LazyImage from "../LazyImage";

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Container className="mt-3">
        <LazyImage
          blurred={blurred}
          src={imgSm}
          srcSet={`${imgSm} 768w, ${imgMd} 992w, ${imgLg} 1440w`}
          sizes="(max-width: 768px) 100vw, (max-width: 992px) 100vw, 90vw"
        />
      </Container>
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Home;
