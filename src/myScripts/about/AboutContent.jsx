import React, { useContext } from "react";
import { GoogleSheetDataContext } from "../ExternalFrame";
import { ListGroup } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutContent() {
  const googleData = useContext(GoogleSheetDataContext);
  return (
    <>
      <Col md={5} className="services_cols">
        <p>
          <span className="about_atinc">
            <strong className="about_atinc_strong">At Incredibles,</strong>
          </span>
          <br />
          {googleData.map((data, i) => (
            <span className="about_atinc_desc">{data.about_incredibles}</span>
          ))}
        </p>
      </Col>
    </>
  );
}

export default AboutContent;
