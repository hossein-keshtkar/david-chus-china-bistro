import React from "react";
import { Container } from "react-bootstrap";

import menuImg from "../../assets/images/menu-tile.jpg";
import blurredMenu from "../../assets/images/blurred-menu.png";
import specialsImg from "../../assets/images/specials-tile.jpg";
import blurredSpecials from "../../assets/images/blurred-specials.png";
import styles from "../../styles/HomeRow.module.css";
import Location from "./HomeLocation";
import LinkItem from "./HomeItem";

const HomeRow = () => {
  const menu = process.env.REACT_APP_MENU_API;
  const specials = process.env.REACT_APP_SPECIALS_API;

  return (
    <Container className="my-5">
      <div className="row d-flex justify-content-center">
        <LinkItem
          to={menu}
          src={menuImg}
          blurred={blurredMenu}
          alt={"menu"}
          header={"Menu"}
        />
        <LinkItem
          to={specials}
          src={specialsImg}
          blurred={blurredSpecials}
          alt={"specials"}
          header={"Specials"}
        />
        <div className={`${styles.mapContainer} col-lg-4 col-md-12 mb-3`}>
          <Location />
        </div>
      </div>
    </Container>
  );
};

export default HomeRow;
