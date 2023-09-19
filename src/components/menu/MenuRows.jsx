import React from "react";

import MenuItem from "./MenuItem";
import { menuCategories } from "../../data/menuCategories";
import styles from "../../styles/MenuRows.module.css";

const MenuRows = () => {
  const menu = process.env.REACT_APP_MENU_API;

  return (
    <div className="row my-5">
      {menuCategories.map((item) => (
        <div
          className={`${styles.container} col-lg-3 col-md-4 d-flex align-items-center justify-content-center`}
          key={item.id}
        >
          <MenuItem
            bg={item.bgImg}
            img={item.mainImg}
            title={item.title}
            to={`${menu}/${item.id}`}
            height={200}
            width={200}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuRows;
