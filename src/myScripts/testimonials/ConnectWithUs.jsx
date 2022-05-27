import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Headings from "../heads/Headings";
import Images from "../heads/Images";

function ConnectWithUs() {
  const initialFormData = Object.freeze({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your query has been submitted. Our team will get back to you shortly.`
    );
    const templateId = "template_7u2812h";
    const serviceID = "service_5jvtan9";
    sendFeedback(serviceID, templateId, {
      from_name: formData.name,
      phone: formData.phone,
      message_html: formData.query,
      email: formData.email,
    });
    console.log(formData);
  };

  return (
    <>
      <Container style={{ marginTop: "18vh" }}>
        <Headings
          heading="What's Stopping You"
          subheading="Send us your query and we will get back to you!"
        />
        <br />

        <Row style={{ marginTop: "10vh" }} className="connect_reqChange">
          <Col md={6} sm={12} className="dad_connectus">
            <Images
              key="Connect_"
              imageClass="connect_us_svg"
              imageSrc="assets/svg/study_abroad.svg"
              imageAlt="Connect with Incredibles"
            />
          </Col>

          <Col md={6} sm={12}>
            <Form noValidate onSubmit={(e) => window.location.reload()}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    onChange={handleChange}
                    placeholder="Enter name"
                    name="name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    onChange={handleChange}
                    placeholder="Enter Phone"
                    name="phone"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuery">
                <Form.Label>Your Query</Form.Label>
                <Form.Control
                  type="query"
                  as="textarea"
                  rows={3}
                  onChange={handleChange}
                  placeholder="Enter your query"
                  name="query"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-muted">
                  We'll never share your phone or email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ConnectWithUs;
