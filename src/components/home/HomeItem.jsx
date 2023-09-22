import React, { useState, memo } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/HomeItem.module.css";
import LazyImage from "../LazyImage";

const HomeItem = ({ to, img, bg, alt, header }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    opacity: isHovered ? 1 : 0,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.item} col-lg-4 col-md-6 col-sm-6 col-12 mb-3`}>
      <Link
        to={to}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <LazyImage
          img={img}
          bg={bg}
          alt={alt}
          style={{
            aspectRatio: "36/25",
          }}
        />
        <h1 className={`${styles.description} d-none d-lg-block`} style={style}>
          {header}
        </h1>
      </Link>
    </div>
  );
};

export default memo(HomeItem);
