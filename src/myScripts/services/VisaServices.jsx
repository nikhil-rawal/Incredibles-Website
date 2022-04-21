import React, { useContext } from "react";
import { GoogleSheetDataContext } from "../ExternalFrame";
import { ListGroup } from "react-bootstrap";

export default function VisaServices() {
  const googleData = useContext(GoogleSheetDataContext);

  return (
    <>
      {googleData.map((data, i) => (
        <ListGroup key={i} variant="flush" className="services_listgroup2">
          <ListGroup.Item>{data.visaconsultancy_accomodation}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}
