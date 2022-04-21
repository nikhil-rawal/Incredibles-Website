import React from "react";
import { Row, Col } from "react-bootstrap";
import Images from "../heads/Images";
import ServiceHeadings from "../heads/ServiceHeadings";

function ServicesDesignLeft(props) {
  return (
    <Row className="services_row ms-auto">
      <Col md={6} className="services_cols">
        <Images
          key="services2image2"
          imageClass="services_helpingicons"
          imageSrc="assets/svg/service2_homeicon.svg"
          imageAlt="Visa Consultancy and Accommodation Icon"
        />
        <ServiceHeadings
          key="services2headsubhead"
          heading="From Visa Consultancy"
          subheading="to Accommodation"
        />
        {props.whichService}
      </Col>
      <Col md={6} className="services_cols">
        <Images
          key="services2image1"
          imageClass="services_svg services_service2_svg"
          imageSrc="assets/svg/service2.svg"
          imageAlt="From Visa Consultancy to Accommodation"
        />
      </Col>{" "}
    </Row>
  );
}

export default ServicesDesignLeft;
