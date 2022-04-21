import React, { useState } from "react";
import Papa from "papaparse";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopBar from "./topBar/TopBar";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import TorontoVideo from "./bgVideo/TorontoVideo";

export const GoogleSheetDataContext = React.createContext();

function ExternalFrame() {
  const [data, setData] = useState({});
  const [error, seterror] = useState(null);

  try {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/15-ng2RnWZwg2mYt-hcjKWwo-2ePA-AgfyAWWKpnRcaE/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData((prevData) => (prevData = results.data));
        },
      }
    );
  } catch (err) {
    if (err.response) {
      console.error(`Error occured. ${err.response}`);
      seterror([err.response]);
    } else if (err.request) {
      console.error(`Error occured. ${err.request}`);
      seterror([err.request]);
    } else {
      console.error(`Error occured. ${err}`);
      seterror([err]);
    }
  }

  const googleData = Array.from(data);

  return (
    <GoogleSheetDataContext.Provider value={googleData}>
      <BrowserRouter>
        <TorontoVideo />
        <TopBar />
        <Home />
        <Services />
        <About />
      </BrowserRouter>
    </GoogleSheetDataContext.Provider>
  );
}

export default ExternalFrame;

/*

<Routes>
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      */
