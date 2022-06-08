import React, { useState, useRef, useCallback } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Headings from "../heads/Headings";
import Images from "../heads/Images";
import emailjs from "@emailjs/browser";

function ConnectWithUs() {
  const initialFormData = Object.freeze({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [formData, updateFormData] = React.useState(initialFormData);

  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
  const queryInput = useRef();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = {
      name: nameInput.current?.value,
      phone: phoneInput.current?.value,
      email: emailInput.current?.value,
      query: queryInput.current?.value,
    };

    console.log(formData, "form", form);
    // console.log(formData, form.current);
    emailjs
      .sendForm(
        "service_5jvtan9",
        "template_7u2812h",
        form,
        "Rmsp_8bqT5uWJDt3H"
      )
      .then(
        (result) => {
          // console.log(formData, form.current);
          console.log("Email successfully sent!");
          // updateFormData((prevData) => (prevData = initialFormData));
        },
        (error) => {
          console.error("There has been an Error.", error);
        }
      );

    alert(
      `Your query has been submitted. Our team will get back to you shortly.`
    );
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
            <Form noValidate>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    ref={nameInput}
                    type="name"
                    onChange={handleChange}
                    placeholder="Enter name"
                    name="name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    ref={phoneInput}
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
                  ref={emailInput}
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
                  ref={queryInput}
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

              <Button onClick={sendEmail} variant="primary" type="submit">
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

/*
// export const ContactUs = () => {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_5jvtan9', 'template_7u2812h', form.current, 'Rmsp_8bqT5uWJDt3H')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  // Rmsp_8bqT5uWJDt3H

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `Your query has been submitted. Our team will get back to you shortly.`
  //   );
  //   const templateId = "template_7u2812h";
  //   const serviceID = "service_5jvtan9";
  //   emailjs.sendForm(serviceID, templateId, {
  //     from_name: formData.name,
  //     phone: formData.phone,
  //     message_html: formData.query,
  //     email: formData.email,
  //   });
  //   console.log(formData);
  // };


  // const sendFeedback = (serviceID, templateId, variables) => {
  //   window.emailjs
  //     .send(serviceID, templateId, variables)
  //     .then((res) => {
  //       console.log("Email successfully sent!");
  //     })
  //     .catch((err) => console.error("There has been an Error.", err));
  // };
*/
