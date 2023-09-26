import React from "react";

import Page from "../Page";
import { Container } from "react-bootstrap";

const Awards = () => {
  return (
    <Page>
      <Container className="text-center my-5">
        <h1>Awards</h1>
        <p>
          David Chu's China Bistro is a recepient of multiple awards for its
          great food and service.
          <br />
          Details are coming soon.
        </p>
      </Container>
    </Page>
  );
};

export default Awards;
