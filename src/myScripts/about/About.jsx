import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <>
      <Container className="about_container" style={{ marginTop: "14vh" }}>
        <Row>
          <h1 className="section_heading">Our Incredible Story</h1>
        </Row>
        <Row>
          <h2 className="section_subheading">
            Subheading for about us section.
          </h2>
        </Row>
        <br />
      </Container>
    </>
  );
}

export default About;
