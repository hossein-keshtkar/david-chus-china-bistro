import React, { useEffect, useState, useRef } from "react";

import LazyImage from "../LazyImage";
import styles from "../../styles/ProductionItem.module.css";
import { RESIZE } from "../../constants/keywords";

const ProductsItem = ({ description, header, label, price, img, bg }) => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  const paraRef = useRef();

  const widthHandler = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    const cost = price.split(" ");

    paraRef.current.innerHTML = `<span>${cost[0]}</span> <sub>${
      cost[1] ? cost[1] : ""
    }</sub> <span>${cost[2] ? cost[2] : ""}</span> <sub>${
      cost[3] ? cost[3] : ""
    }</sub>`;

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
        <p className="mt-1" ref={paraRef}></p>
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
