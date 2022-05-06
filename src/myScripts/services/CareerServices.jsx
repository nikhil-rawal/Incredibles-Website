import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { GoogleSheetDataContext } from "../ExternalFrame";

export default function CareerServices() {
  const googleData = useContext(GoogleSheetDataContext);
  return (
    <>
      {googleData.map((data, i) => (
        <ListGroup key={i} variant="flush" className="services_listgroup">
          <ListGroup.Item className="services_allpoints">
            {data.careercounselling_universityadmissions}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}
