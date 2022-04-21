import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AboutContent from "./AboutContent";
import Images from "../heads/Images";

function AboutDesign(props) {
  return (
    <Row className="services_row ms-auto" style={{ marginTop: "10vh" }}>
      <AboutContent />
      <Col md={7} className="services_cols">
        <Images
          key="about_us_image1"
          imageClass="about_svg"
          imageSrc="assets/svg/about_us.svg"
          imageAlt="About Incredibles, Ritika Narang, Vikas Narang"
        />
      </Col>{" "}
    </Row>
  );
}

export default AboutDesign;
