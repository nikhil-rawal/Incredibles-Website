import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Headings(props) {
  return (
    <>
      <Row>
        <h1 className="section_heading">{props.heading}</h1>
      </Row>
      <Row>
        <h2 className="section_subheading">{props.subheading}</h2>
      </Row>
    </>
  );
}

export default Headings;
