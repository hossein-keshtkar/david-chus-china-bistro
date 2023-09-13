import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import menuImg from "../../assets/images/menu-tile.jpg";
import blurredMenu from "../../assets/images/blurred-menu.png";
import specialsImg from "../../assets/images/specials-tile.jpg";
import blurredSpecials from "../../assets/images/blurred-specials.png";
import styles from "../../styles/BottomSection.module.css";
import LazyImg from "../LazyImg";
import Location from "./Location";

const HomePageBottomSection = () => {


  const className = "col-lg-4 col-md-6 col-sm-6 col-12 mb-3";

  return (
    <Container className="my-5">
      <div className="row">
        <div className={className}>
          <Link to="/menu">
            <LazyImg src={menuImg} blurred={blurredMenu} alt={"menu"} />
          </Link>
        </div>

        <div className={className}>
          <Link to="/menu/specials">
            <LazyImg
              src={specialsImg}
              blurred={blurredSpecials}
              alt={"specials"}
            />
          </Link>
        </div>

        <div className="col-lg-4 col-md-12 mb-3">
          <Location />
        </div>
      </div>
    </Container>
  );
};

export default HomePageBottomSection;
