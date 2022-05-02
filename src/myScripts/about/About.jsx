import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headings from "../heads/Headings";
import AboutDesign from "./AboutDesign";
import PersonCard from "../heads/PersonCard";

function About() {
  const aboutDirectors = [
    {
      index: 0,
      image: "assets/avatar.jpeg",
      title: "Vikas Narang",
      about: "about vik",
    },
    {
      index: 1,
      image: "assets/avatar.jpeg",
      title: "Ritika Narang",
      about: "About rik",
    },
  ];

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
        <Row md="auto" className="justify-content-evenly mt-5">
          {aboutDirectors.map((data, i) => (
            <Col>
              <PersonCard
                key={data.index}
                title={data.title}
                image={data.image}
                about={data.about}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default About;
