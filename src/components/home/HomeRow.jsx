import React from "react";
import { Container } from "react-bootstrap";

import menuImg from "../../assets/images/menu-tile.jpg";
import bgMenu from "../../assets/images/blurred-menu.png";
import specialsImg from "../../assets/images/specials-tile.jpg";
import bgSpecials from "../../assets/images/blurred-specials.png";
import Location from "./HomeLocation";
import HomeItem from "./HomeItem";

const HomeRow = () => {
  const menu = process.env.REACT_APP_MENU_API;
  const specials = process.env.REACT_APP_SPECIALS_API;

  return (
    <Container className="my-5">
      <div className="row d-flex justify-content-center">
        <HomeItem
          to={menu}
          img={menuImg}
          bg={bgMenu}
          alt={"menu"}
          header={"Menu"}
        />
        <HomeItem
          to={specials}
          img={specialsImg}
          bg={bgSpecials}
          alt={"specials"}
          header={"Specials"}
        />
        <div className="d-flex d-sm-block flex-column align-items-center col-lg-4 col-md-12 mb-3">
          <Location />
          <h2 className="text-center">Location</h2>
        </div>
      </div>
    </Container>
  );
};

export default HomeRow;
