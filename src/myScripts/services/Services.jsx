import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import CareerServices from "./CareerServices";
import VisaServices from "./VisaServices";
import DepartureServices from "./DepartureServices";

function Services() {
  return (
    <>
      <Container className="services_container" style={{ marginTop: "26vh" }}>
        <Row>
          <h1 className="section_heading">Explore Your Incredible Options</h1>
        </Row>
        <Row>
          <h2 className="section_subheading">
            We can make your overseas education dream come true.
          </h2>
        </Row>
        <br />
        <Row className="services_row ms-auto">
          <Col md={6} className="services_cols">
            <Image
              className="services_svg services_service1_svg"
              src="assets/svg/service1.svg"
              alt="From Career Counselling to University Admissions"
            />
          </Col>
          <Col md={6} className="services_cols">
            <Image
              className="services_helpingicons"
              src="assets/svg/service1_degreeicon.svg"
              alt="Career Counselling and University Admissions Icon"
            />
            <p className="serices_p">
              <span className="services_services_points">
                <strong>From Career Counselling</strong>
              </span>
              <br />
              <span className="services_services_points">
                to University Admissions
              </span>
            </p>
            <CareerServices />
          </Col>
        </Row>
        <br />
        <Row className="services_row ms-auto">
          <Col md={6} className="services_cols">
            <Image
              className="services_helpingicons"
              src="assets/svg/service2_homeicon.svg"
              alt="Visa Consultancy and Accommodation Icon"
            />
            <p className="serices_p">
              <span className="services_services_points">
                <strong>From Visa Consultancy</strong>
              </span>
              <br />
              <span className="services_services_points">to Accommodation</span>
            </p>
            <VisaServices />
          </Col>
          <Col md={6} className="services_cols">
            <Image
              className="services_svg services_service2_svg"
              src="assets/svg/service2.svg"
              alt="From Visa Consultancy to Accommodation"
            />
          </Col>{" "}
        </Row>
        <br />
        <Row className="services_row ms-auto">
          <Col md={6} className="services_cols">
            <Image
              className="services_svg services_service3_svg"
              src="assets/svg/service3.svg"
              alt="Pre-Departure Briefing to On Sight Support"
            />
          </Col>
          <Col md={6} className="services_cols">
            <Image
              className="services_helpingicons"
              src="assets/svg/service3_planeicon.svg"
              alt="Pre-Departure Briefing and On Sight Support Icon"
            />
            <p className="serices_p">
              <span className="services_services_points">
                <strong>Pre-Departure Briefing</strong>
              </span>
              <br />
              <span className="services_services_points">
                to On Sight Support
              </span>
            </p>
            <DepartureServices />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
