import React, { useEffect, useState } from "react";

import LazyImage from "../LazyImage";
import styles from "../../styles/ProductionItem.module.css";
import { RESIZE } from "../../constants/keywords";

const ProductsItem = ({ description, header, label, price, img, bg }) => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setWindowsWidth(window.innerWidth);
    console.log(windowsWidth);
  };

  useEffect(() => {
    window.addEventListener(RESIZE, widthHandler);

    return () => window.removeEventListener(RESIZE, widthHandler);
  });

  return (
    <div
      className={`${styles.container} d-flex flex-column flex-md-row align-items-center border-bottom py-4 py-md-0`}
    >
      <div className="position-relative">
        <LazyImage
          img={img}
          bg={bg}
          width={windowsWidth > 992 ? 177 : 250}
          height={windowsWidth > 992 ? 106 : 150}
        >
          <span className="bg-success w-25 text-center position-absolute bottom-0 end-0">
            {label}
          </span>
        </LazyImage>
        <h5 className="mt-1">{price}</h5>
      </div>
      <div
        className={`${styles.content} mx-4 ms-md-4 text-center text-md-start`}
      >
        <h4>{header}</h4>
        <em>{description}</em>
      </div>
    </div>
  );
};

export default ProductsItem;
