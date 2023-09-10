import React from "react";
import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const Error = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <h1>Opps!</h1>
      <div>Something went wrong!</div>
      <code>{useRouteError()}</code>
    </Container>
  );
};

export default Error;
