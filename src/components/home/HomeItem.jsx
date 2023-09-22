import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/HomeItem.module.css";
import LazyImage from "../LazyImage";
import { RESIZE } from "../../constants/keywords";

const HomeItem = ({ to, img, bg, alt, header }) => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  const className =
    "d-flex flex-column align-items-center d-sm-block col-lg-4 col-md-6 col-sm-6 col-12 link link-light text-decoration-none text-center";

  const widthHandler = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(RESIZE, widthHandler);

    return () => window.removeEventListener(RESIZE, widthHandler);
  }, []);

  return (
    <Link className={`${styles.container} ${className}`} to={to}>
      <LazyImage
        img={img}
        bg={bg}
        alt={alt}
        height={windowsWidth <= 576 && "189px"}
        width={windowsWidth <= 576 && "272px"}
        style={{
          aspectRatio: "36/25",
        }}
      />
      <h2>{header}</h2>
    </Link>
  );
};

export default HomeItem;
