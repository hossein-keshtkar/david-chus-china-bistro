import React from "react";
import MyNavbar from "../Navbar";
import Footer from "../Footer";
import LazyImage from "../LazyImage";

import blurredMenu from "../../assets/images/blurred-menu.png";
import menu from "../../assets/images/menu-tile.jpg";

const Menu = () => {
  return (
    <div>
      <MyNavbar />
      <LazyImage src={menu} blurred={blurredMenu} alt={"image"} />
      <Footer />
    </div>
  );
};

export default Menu;
