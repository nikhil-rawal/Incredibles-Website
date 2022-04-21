import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Headings from "../heads/Headings";
import AboutDesign from "./AboutDesign";

function About() {
  return (
    <>
      <Container style={{ marginTop: "14vh" }}>
        <Headings
          heading="Our Incredible Story"
          subheading="Anything About Incredibles"
        />
        <br />
        <AboutDesign />
      </Container>
    </>
  );
}

export default About;
