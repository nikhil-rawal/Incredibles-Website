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
          <Carousel style={{ margin: "auto" }}>
            {googleData.map((data, i) => (
              <Carousel.Item key={i}>
                <img
                  className="testimonial_image"
                  src="assets/testimonial.svg"
                />
                <Carousel.Caption
                  style={{
                    color: "#000860",
                    verticalAlign: "center",
                  }}
                >
                  <h2>Band Score: {data.testimonialBand}</h2>
                  <p>{data.testimonialContent}</p>
                  <h3>{data.testimonialAuthor}</h3>
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
