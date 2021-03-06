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
      about: "4+ years of Industry Experience as an Immigration Consultant with over 200 happy customers around the world.",
    },
    {
      index: 1,
      image: "assets/avatar.jpeg",
      title: "Ritika Narang",
      about: "IELTS/PTE, English Speaking and Personality Development Professor with proven and continuous results from the establishment of Incredibles.",
    },
  ];

  return (
    <>
      <Container className="about_container" style={{ marginTop: "6vh" }}>
        <Headings
          heading="Our Incredible Story"
          subheading="This is what we tell"
        />
        <br />
        <AboutDesign />
        <br />
        <Row md="auto" sm={12} className="justify-content-evenly mt-5 abt_dir">
          {aboutDirectors.map((data, i) => (
            <Col key={data.index}>
              <PersonCard
                title={data.title}
                // image={data.image}
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
