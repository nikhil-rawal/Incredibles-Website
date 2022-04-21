import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function ServicesDesignLeft(props) {
  return (
    <Row className="services_row ms-auto">
      <Col md={6} className="services_cols">
        <Image
          className={props.image2Class}
          src={props.image2Src}
          alt={props.image2Alt}
        />
        <p className="serices_p">
          <span className="services_services_points">
            <strong>{props.heading}</strong>
          </span>
          <br />
          <span className="services_services_points">{props.subheading}</span>
        </p>
        {props.whichService}
      </Col>
      <Col md={6} className="services_cols">
        <Image
          className={props.image1Class}
          src={props.image1Src}
          alt={props.image1Alt}
        />
      </Col>{" "}
    </Row>
  );
}

export default ServicesDesignLeft;
