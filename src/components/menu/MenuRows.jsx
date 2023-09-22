import React from "react";
import { Link } from "react-router-dom";

import { menuCategories } from "../../data/menuCategories";
import styles from "../../styles/MenuRows.module.css";
import LazyImage from "../LazyImage";

const MenuRows = () => {
  const menu = process.env.REACT_APP_MENU_API;

  return (
    <div className="row my-5">
      {menuCategories.map((item) => (
        <div
          className={`${styles.container} col-lg-3 col-md-4 d-flex align-items-center justify-content-center`}
          key={item.id}
        >
          <Link
            className={`${styles.link} link link-light rounded d-flex justify-content-center my-3`}
            to={`${menu}/${item.id}`}
          >
            <LazyImage
              bg={item.bgImg}
              img={item.mainImg}
              height={200}
              width={200}
            >
              <div
                className={`${styles.title} rounded-bottom position-absolute bottom-0 text-center py-1`}
              >
                {item.title ? item.title : "?"}
              </div>
            </LazyImage>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuRows;
