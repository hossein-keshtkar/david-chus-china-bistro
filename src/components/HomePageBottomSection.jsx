import React from "react";
import { Card, Container } from "react-bootstrap";

const HomePageBottomSection = () => {
  return (
    <Container className="mt-3">
      <div className="row d-flex justify-content-between">
        <Card className="col-md-4 col-sm-6 col-xs-12">1</Card>
        <Card className="col-md-4 col-sm-6 col-xs-12">2</Card>
        <Card className="col-md-4 col-sm-12 col-xs-12">3</Card>
      </div>
    </Container>
  );
};

export default HomePageBottomSection;
