import React from "react";
import { Card, Container } from "react-bootstrap";

const HomePageBottomSection = () => {
  return (
    <Container className="mt-3">
      <div className="row">
        <Card className="col-md-4 col-sm-6 col-xs-12 mb-3">1</Card>
        <Card className="col-md-4 col-sm-6 col-xs-12 mb-3">2</Card>
        <Card className="col-md-4 col-sm-12 col-xs-12 mb-3">3</Card>
      </div>
    </Container>
  );
};

export default HomePageBottomSection;
