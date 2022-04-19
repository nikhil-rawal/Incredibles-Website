import React, { useState } from "react";
import Papa from "papaparse";
import { ListGroup } from "react-bootstrap";
// import getSheetsData from "../google/GetSheetsData";

function VisaServices() {
  const [data, setData] = useState({});
  try {
    Papa.parse(
      `https://docs.google.com/spreadsheets/d/15-ng2RnWZwg2mYt-hcjKWwo-2ePA-AgfyAWWKpnRcaE/pub?output=csv`,
      {
        download: true,
        header: true,
        complete: (results) => {
          setData((prevData) => (prevData = results.data));
        },
      }
    );
  } catch (err) {
    console.log(`Error Details: ${err.message}`);
  }

  const movies = Array.from(data);

  return (
    <>
      {movies.map((data, i) => (
        <ListGroup key={i} variant="flush" className="services_listgroup2">
          <ListGroup.Item>{data.services2}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default VisaServices;
