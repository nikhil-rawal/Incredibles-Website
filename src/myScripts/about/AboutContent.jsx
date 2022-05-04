import React, { useContext } from "react";
import { GoogleSheetDataContext } from "../ExternalFrame";
import { Col } from "react-bootstrap";

function AboutContent() {
  const googleData = useContext(GoogleSheetDataContext);
  return (
    <Col md={6} className="services_cols">
      <p className="about_p">
        <span className="about_atinc">
          <strong className="about_atinc_strong">At Incredibles,</strong>
        </span>
        <br />
        {googleData.map((data, i) => (
          <span key={i} className="about_atinc_desc">
            {data.aboutIncredibles}
          </span>
        ))}
      </p>
    </Col>
  );
}

export default AboutContent;
