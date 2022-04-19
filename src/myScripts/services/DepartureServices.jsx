import React, { useState } from "react";
import Papa from "papaparse";
import { ListGroup } from "react-bootstrap";

function DepartureServices() {
  const [data, setData] = useState({});
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/15-ng2RnWZwg2mYt-hcjKWwo-2ePA-AgfyAWWKpnRcaE/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const movies = Array.from(data);

  return (
    <>
      {movies.map((data, i) => (
        <ListGroup key={i} variant="flush" className="services_listgroup">
          <ListGroup.Item>{data.services3}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default DepartureServices;
