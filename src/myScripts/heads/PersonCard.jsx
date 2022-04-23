import React, { useEffect, useContext } from "react";
import { GoogleSheetDataContext } from "../ExternalFrame";
import { Row, Col, Card } from "react-bootstrap";

function PersonCard() {
  const googleData = useContext(GoogleSheetDataContext);

  useEffect(() => {
    googleData
      .slice(0, 2)
      .map((data, i) => console.log("personcard useeffect", data.ritika));
  }, [googleData]);

  console.log("personcard normal", googleData);

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Card Text</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PersonCard;
/*

  {googleData.map((data, i) => (
            <span key={i} className="about_atinc_desc">
              {data.about_vikasnarang}
            </span>
          ))}

          {googleData.map((data, i) => (
                  <span key={i} className="about_atinc_desc">
                    {data.about_directors}
                  </span>
                ))}

          */
