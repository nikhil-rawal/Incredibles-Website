import React, { useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import Headings from "../heads/Headings";
import AboutDesign from "./AboutDesign";
import PersonCard from "../heads/PersonCard";
import { GoogleSheetDataContext } from "../ExternalFrame";

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
        <br />
        <PersonCard />
      </Container>
    </>
  );
}

export default About;
