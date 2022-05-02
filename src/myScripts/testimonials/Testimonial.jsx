import React, { useContext } from "react";
import { Container, Carousel } from "react-bootstrap";
import Headings from "../heads/Headings";
import { GoogleSheetDataContext } from "../ExternalFrame";
import { StarFill, StarHalf } from "react-bootstrap-icons";

function Testimonial() {
  const googleData = useContext(GoogleSheetDataContext);

  return (
    <>
      <Container style={{ marginTop: "14vh" }}>
        <Headings
          heading="Our Success Stories"
          subheading="Our actions speak louder"
        />
        <br />
        <Carousel>
          {googleData.map((data, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/avatar.jpeg"
                alt={data.testimonial_author}
              />
              <Carousel.Caption>
                <h3>{data.testimonial_band}</h3>
                <p>
                  <StarFill />
                </p>
                <p>{data.testimonial_content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default Testimonial;
