import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Page from "../Page";
import { lunchMenu } from "../../data/lunchMenu";
import ProductsItem from "./ProductsItem";

const Products = () => {
  const { id } = useParams();

  const data = lunchMenu.find((item) => item.id === id);
  const { items } = data;

  return (
    <Page>
      <Container>
        <div className="my-5 text-center">
          <h3>{data.header}</h3>
          <p>{data.paragraph}</p>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-3">
              <ProductsItem
                description={item.description}
                header={item.header}
                label={item.label}
                price={item.price}
                img={item.img}
                bg={item.bg}
              />
            </div>
          ))}
        </div>
      </Container>
    </Page>
  );
};

export default Products;
