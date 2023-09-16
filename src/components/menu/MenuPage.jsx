import React from "react";
import { Container } from "react-bootstrap";

import MyNavbar from "../Navbar";
import Footer from "../Footer";
import Rows from "./Rows";

const Menu = () => {
  return (
    <div>
      <MyNavbar />
      <Container>
        <h3 className="text-center mt-5">Menu Categories</h3>
        <p className="text-center">
          Substituting white rice with brown rice or fried rice after 3:00pm
          will be $1.50 for a pint and $2.50 for a quart.
        </p>
        <Rows />
      </Container>
      <Footer />
    </div>
  );
};

export default Menu;
