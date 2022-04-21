import React from "react";
import { Container, Row } from "react-bootstrap";

import Headings from "../heads/Headings";
import ServicesDesignRight from "./ServicesDesignRight";
import ServicesDesignLeft from "./ServicesDesignLeft";
import CareerServices from "./CareerServices";
import VisaServices from "./VisaServices";
import DepartureServices from "./DepartureServices";

function Services() {
  return (
    <>
      <Container className="services_container" style={{ marginTop: "30vh" }}>
        <Headings
          heading="Explore Your Incredible Options"
          subheading="We can make your overseas education dream come true."
        />
        <br />
        <ServicesDesignRight
          key="services1"
          image1Class="services_svg services_service1_svg"
          image1Src="assets/svg/service1.svg"
          image1Alt="From Career Counselling to University Admissions"
          image2Class="services_helpingicons"
          image2Src="assets/svg/service1_degreeicon.svg"
          image2Alt="Career Counselling and University Admissions Icon"
          heading="From Career Counselling"
          subheading="to University Admissions"
          whichService={<CareerServices />}
        />
        <br />
        <ServicesDesignLeft
          key="services2"
          image1Class="services_svg services_service2_svg"
          image1Src="assets/svg/service2.svg"
          image1Alt="From Visa Consultancy to Accommodation"
          image2Class="services_helpingicons"
          image2Src="assets/svg/service2_homeicon.svg"
          image2Alt="Visa Consultancy and Accommodation Icon"
          heading="From Visa Consultancy"
          subheading="to Accommodation"
          whichService={<VisaServices />}
        />
        <br />
        <ServicesDesignRight
          key="services3"
          image1Class="services_svg services_service3_svg"
          image1Src="assets/svg/service3.svg"
          image1Alt="Pre-Departure Briefing to On Sight Support"
          image2Class="services_helpingicons"
          image2Src="assets/svg/service3_planeicon.svg"
          image2Alt="Pre-Departure Briefing and On Sight Support Icon"
          heading="Pre-Departure Briefing"
          subheading="to On Sight Support"
          whichService={<DepartureServices />}
        />
      </Container>
    </>
  );
}

export default Services;
