import React from "react";

import Page from "../Page";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Page>
      <Container className="text-center my-5 px-5">
        <h1>About This Website</h1>
        <div className="text-start">
          <div className="mb-4">
            <h4>
              <span className="text-warning">⚠︎</span> This is not the offical
              website
            </h4>
            <h5>This is just an imitation of the original website</h5>
          </div>
          <div>
            <p>
              This project, is the updated and modernized version of the
              original website which has been developed using Angular.js in
              2016.
              <br />
              If you want to compare the original website to this one, check
              this out:
            </p>
            <h5 className="my-3">
              👉{" "}
              <a
                href="https://www.davidchuschinabistro.com/"
                className="link link-light link-underline-primary"
                target="_blank"
              >
                www.davidchuschinabistro.com
              </a>
            </h5>
            <p>
              In this version, we recreated the same project using React.js
              framework, instead of Angular.js and also tried to implement more
              modern methods and technologies in order to convey better user
              experience.
            </p>
            <p>
              It is worth noting that, this is not an exact imitation of the
              official website.
              <br />
              So, there would definitely be some minor differences between these
              two applications.
            </p>
            <p>
              By developing this web application, we just tried to demonstrate
              our technical skills to whom may it concern and have no other
              meanings. <br />
              Hopefully, we have achieved our goals, here.
            </p>
          </div>
          <div>
            <code className="text-light">Developers:</code>
            <br />
            <code className="text-light">Hossein Keshtkar</code>
            <br />
            <code className="text-light">Alireza Azimi</code>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default About;
