import React, { useState } from "react";
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
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isSpecialsHovered, setIsSpecialsHovered] = useState(false);

  console.log(process.env.REACT_APP_MENU_API);

  return (
    <Container className="my-5">
      <div className="row d-flex justify-content-center">
        <div
          className={`${styles.item} col-lg-4 col-md-6 col-sm-6 col-12 mb-3`}
        >
          <Link
            to="/menu"
            onMouseEnter={() => {
              setIsMenuHovered(true);
            }}
            onMouseLeave={() => {
              setIsMenuHovered(false);
            }}
          >
            <LazyImg src={menuImg} blurred={blurredMenu} alt={"menu"} />
            <h1
              className={styles.description}
              style={{
                opacity: isMenuHovered ? 1 : 0,
              }}
            >
              Menu
            </h1>
          </Link>
        </div>

        <div
          className={`${styles.item} col-lg-4 col-md-6 col-sm-6 col-12 mb-3`}
        >
          <Link
            to="/menu/specials"
            onMouseEnter={() => {
              setIsSpecialsHovered(true);
            }}
            onMouseLeave={() => {
              setIsSpecialsHovered(false);
            }}
          >
            <LazyImg
              src={specialsImg}
              blurred={blurredSpecials}
              alt={"specials"}
            />
            <h1
              className={styles.description}
              style={{
                opacity: isSpecialsHovered ? 1 : 0,
              }}
            >
              Specials
            </h1>
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
