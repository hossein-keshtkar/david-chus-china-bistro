import React from "react";

import MenuItem from "./MenuItem";

import blurred from "../../assets/images/menu/Blurred/A/download.png";
import img from "../../assets/images/menu/A/A.jpg";
import { Container } from "react-bootstrap";

const MenuRows = () => {
  return (
    <div className="row my-5">
      <MenuItem bgImg={blurred} img={img} title={"SOUP"} />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

export default MenuRows;
