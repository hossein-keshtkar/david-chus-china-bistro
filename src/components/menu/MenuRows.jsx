import React from "react";

import MenuItem from "./MenuItem";

import { menuCategories } from "../../data/menuCategories";

const MenuRows = () => {
  return (
    <div className="row my-5">
      {menuCategories.map((item) => (
        <MenuItem
          bgImg={item.bgImg}
          img={item.mainImg}
          title={item.title}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default MenuRows;
