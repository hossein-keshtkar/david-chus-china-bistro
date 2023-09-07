import React from "react";
import { Card, Container } from "react-bootstrap";

const HomePageBottomSection = () => {
  return (
    <Container className="mt-3">
      <div className="row">
        <Card className="col-md-4 col-sm-6 col-xs-12 mb-3">1</Card>
        <Card className="col-md-4 col-sm-6 col-xs-12 mb-3">2</Card>
        <Card className="col-md-4 col-sm-12 col-xs-12 mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675063579344!2d-76.71426302412522!3d39.36359441906242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid%20Chu&#39;s%20China%20Bistro!5e0!3m2!1sen!2snl!4v1694054215589!5m2!1sen!2snl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Card>
      </div>
    </Container>
  );
};

export default HomePageBottomSection;
