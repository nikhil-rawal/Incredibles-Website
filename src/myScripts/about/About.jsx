import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Headings from "../heads/Headings";

function About() {
  return (
    <>
      <Container className="about_container" style={{ marginTop: "14vh" }}>
        <Headings
          heading="Our Incredible Story"
          subheading="Anything About Incredibles"
        />
        <br />
      </Container>
    </>
  );
}

export default About;
