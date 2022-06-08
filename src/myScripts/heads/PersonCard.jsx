import React from "react";
import { Card } from "react-bootstrap";

function PersonCard(props, index) {
  return (
    <Card key={index} style={{ width: "18rem" }} className="box">
      {/* <Card.Img variant="top" src={props.image} /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.about}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
