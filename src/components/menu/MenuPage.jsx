import React from "react";
import { Container } from "react-bootstrap";

import MenuRows from "./MenuRows";
import styles from "../../styles/MenuPage.module.css";
import Page from "../Page";

const Menu = () => {
  return (
    <Page>
      <Container className={styles.Container}>
        <h3 className="text-center mt-5">Menu Categories</h3>
        <p className="text-center">
          Substituting white rice with brown rice or fried rice after 3:00pm
          will be $1.50 for a pint and $2.50 for a quart.
        </p>
        <MenuRows />
      </Container>
    </Page>
  );
};

export default Menu;
