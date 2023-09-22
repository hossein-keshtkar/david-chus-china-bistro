import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { menuSubCategories } from "../../data/menuSubCategories";
import ProductsItem from "./ProductsItem";
import NotFound from "../NotFound";
import Page from "../Page";

const Products = () => {
  const { id } = useParams();

  const data = menuSubCategories.find((item) => item.id === id);

  return data ? (
    <Page>
      <Container className="px-xl-5">
        <div className="my-5 text-center">
          <h3>{data.header}</h3>
          <p>{data.paragraph}</p>
        </div>
        <div className="row">
          {data &&
            data.items.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-12 mb-4">
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
  ) : (
    <NotFound />
  );
};

export default Products;
