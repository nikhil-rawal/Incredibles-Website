import React from "react";
import { Container, Row, Col, Image, Button, Ratio } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Whatsapp,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";

function Home() {
  return (
    <>
      <Container className="home_data">
        <Row>
          <h1 className="home_heading">
            <strong>
              Start your{" "}
              <span className="home_heading_highword">International</span>
              <br />
              journey abroad
            </strong>
          </h1>
        </Row>
        <Row>
          <h2 className="home_subheading">Be Incredible with Incredibles</h2>
        </Row>
        <Row className="justify-content-center">
          <Button variant="homeApply" className="homeApply_btn" size="medium">
            <span className="homeApply_btn_span">Apply Online</span>
            &nbsp;&nbsp;
            <ArrowRight className="homeApply_btn_arrow" />
          </Button>{" "}
        </Row>
        <Row className="justify-content-center">
          <Col md={1}>
            <Button
              variant="homeSocial"
              className="facebook_btn social_btn"
              size="small"
              rel="noopener noreferrer"
              href="https://www.facebook.com/INCREDIBLESFATEHABAD/"
              target="_blank"
            >
              <Facebook className="facebook_icon social_icon" />
            </Button>
          </Col>

          <Col md={1}>
            <Button
              variant="homeSocial"
              className="instagram_btn social_btn"
              size="small"
              rel="noopener noreferrer"
              href="https://www.instagram.com/incredibles_overseas"
              target="_blank"
            >
              <Instagram className="instagram_icon social_icon" />
            </Button>
          </Col>
          <Col md={1}>
            <Button
              variant="homeSocial"
              className="youtube_btn social_btn"
              size="small"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCoe0BV1vr5S_x-uTCN2985Q"
              target="_blank"
            >
              <Youtube className="youtube_icon social_icon" />
            </Button>
          </Col>

          <Col md={1}>
            <Button
              variant="homeSocial"
              className="whatsapp_btn social_btn"
              size="small"
              rel="noopener noreferrer"
              href="https://wa.me/919996826166"
              target="_blank"
            >
              <Whatsapp className="whatsapp_icon social_icon" />
            </Button>
          </Col>

          <Col md={1}>
            <Button
              variant="homeSocial"
              className="mail_btn social_btn"
              size="small"
              rel="noopener noreferrer"
              href="mailto:incrediblesbrainery@gmail.com "
              target="_blank"
            >
              <Envelope className="mail_icon social_icon" />
            </Button>
          </Col>

          <Col md={1}>
            <Button
              variant="homeSocial"
              className="phone_btn social_btn"
              size="small"
              rel="noopener noreferrer"
              href="tel:+91798-844-6019"
              target="_blank"
            >
              <Telephone className="phone_icon social_icon" />
            </Button>
          </Col>
        </Row>

        {/* <Col md={6}>
            <Image
              className="home_studyabroad_map_logo"
              src="assets/svg/study_abroad.svg"
              alt="Study Abroad"
            />
          </Col> */}
      </Container>
    </>
  );
}

export default Home;
{
  /* ['1x1', '4x3', '16x9', '21x9'].map((ratio) => (
  <Ratio aspectRatio={ratio}>
    <div>{ratio}</div>
  </Ratio>
));

        <div style={{ width: 660, height: 'auto' }}>
  <Ratio aspectRatio="16x9">
    <embed type="image/svg+xml" src="/TheresaKnott_castle.svg" />
  </Ratio>
</div> */
}
