import React from "react";

import LazyImg from "../LazyImg";

const ProductsItem = ({ description, header, label, price, img, bg }) => {
  return (
    <div className="d-flex flex-row">
      <div>
        <LazyImg src={img} blurred={bg} alt={label} />
        <span>{label}</span>
        <span>{price}</span>
      </div>
      <div className="ms-3">
        <h2>{header}</h2>
        <em>{description}</em>
      </div>
    </div>
  );
};

export default ProductsItem;
