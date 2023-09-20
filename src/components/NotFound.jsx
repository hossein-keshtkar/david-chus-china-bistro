import React from "react";
import { Container } from "react-bootstrap";

import Page from "./Page";

const NotFound = () => {
  return (
    <Page>
      <Container className="d-flex flex-column align-items-center justify-content-center my-5">
        <h1 className="h1 fs-1">404!</h1>
        <p>Page doesn't exist!</p>
      </Container>
    </Page>
  );
};

export default NotFound;
