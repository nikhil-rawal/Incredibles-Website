import React, { useContext } from "react";
import { Container, Carousel, Row } from "react-bootstrap";
import Headings from "../heads/Headings";
import { GoogleSheetDataContext } from "../ExternalFrame";

function Testimonial() {
  const googleData = useContext(GoogleSheetDataContext);

  return (
    <>
      <Container style={{ marginTop: "14vh" }}>
        <Headings heading="Our Success Stories" />
        <br />
        <Container className="justify-content-center">
          <Carousel style={{ margin: "auto", width: "50%" }}>
            {googleData.map((data, i) => (
              <Carousel.Item key={i}>
                <Row></Row>
                <Carousel.Caption>
                  <h2>{data.testimonial_band}</h2>
                  <p>{data.testimonial_content}</p>
                  <h3>{data.testimonial_author}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Container>
    </>
  );
}

export default Testimonial;
