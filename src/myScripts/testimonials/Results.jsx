import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ListStars } from "react-bootstrap-icons";
import { Mortarboard } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { EmojiLaughing } from "react-bootstrap-icons";
import { Trophy } from "react-bootstrap-icons";
import { Globe } from "react-bootstrap-icons";

function Results() {
  function ContRows(props) {
    return (
      <Col>
        <span className="test_res test_res_span">{props.icon}</span>
        <h2 className="test_res test_res_h2">{props.text1}</h2>
        <p className="test_res test_res_p">{props.text2}</p>
      </Col>
    );
  }
  return (
    <Container
      className="justify-content-center"
      style={{ marginTop: "20vh", textAlign: "center" }}
    >
      <img
        className="testimonial_results"
        src="assets/svg/results.svg"
        alt="Testimonial Results"
      />
      <Row>
        <ContRows
          icon={<ListStars size={45} />}
          text1="Recommendations"
          text2="Top Reviews by Users"
        />
        <ContRows
          icon={<Trophy size={45} />}
          text1="90%"
          text2="Success Ratio"
        />
        <ContRows
          icon={<EmojiLaughing size={45} />}
          text1="200+"
          text2="Happy Customers"
        />
      </Row>
      <br />
      <Row>
        <ContRows
          icon={<PeopleFill size={45} />}
          text1="Team"
          text2="of Dedicated Professionals"
        />
        <ContRows
          icon={<Mortarboard size={45} />}
          text1="4+"
          text2="Years of Industry Experience"
        />
        <ContRows
          icon={<Globe size={45} />}
          text1="Dynamic"
          text2="Reach Across Globe"
        />
      </Row>
    </Container>
  );
}

export default Results;
