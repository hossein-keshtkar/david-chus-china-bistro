import React from "react";
import { Container } from "react-bootstrap";

import Page from "../Page";
import { lunchMenu } from "../../data/lunchMenu";
import ProductsItem from "./ProductsItem";

const Products = (params) => {
  console.log(params);
  
  return (
    <Page>
      <Container>
        <div className="row">
          {lunchMenu.map((item, index) => (
            <div className="col-lg-6 col-md-12 mb-3">
              <ProductsItem
                description={item.description}
                header={item.header}
                label={item.label}
                price={item.price}
                img={item.img}
                bg={item.bg}
                key={index}
              />
            </div>
          ))}
        </div>
      </Container>
    </Page>
  );
};

export default Products;
