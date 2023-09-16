import React, { useState, memo } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/HomeItem.module.css";
import LazyImg from "../LazyImg";

const HomeItem = ({ to, src, blurred, alt, header }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${styles.item} col-lg-4 col-md-6 col-sm-6 col-12 mb-3`}>
      <Link
        to={to}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <LazyImg src={src} blurred={blurred} alt={alt} />
        <h1
          className={`${styles.description} d-none d-lg-block`}
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          {header}
        </h1>
      </Link>
    </div>
  );
};

export default memo(HomeItem);
