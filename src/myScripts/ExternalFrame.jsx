import React, { useState, useEffect } from "react";
import TopBar from "./topBar/TopBar";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import TorontoBg from "./bgVideo/TorontoBg";
import Testimonial from "./testimonials/Testimonial";
import ConnectWithUs from "./testimonials/ConnectWithUs";
import Footer from "./home/Footer";

export const GoogleSheetDataContext = React.createContext();

function ExternalFrame() {
  const Papa = require("papaparse");
  const [data, setData] = useState([]);
  const [error, seterror] = useState(null);

  const parseFile = () =>
    new Promise((resolve) => {
      Papa.parse(
        "https://docs.google.com/spreadsheets/d/1tcm-FJFsOdUHc6tx8QC7gLEzJDPTRDRYMt5ghwaUhY0/pub?output=csv",
        {
          download: true,
          header: true,
          complete: (results) => {
            resolve(results.data);
          },
        }
      );
    });

  async function fetchParsedData() {
    const parsedData = await parseFile();
    setData((prevData) => (prevData = parsedData));
  }

  const googleData = Array.from(data);

  useEffect(() => {
    fetchParsedData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <GoogleSheetDataContext.Provider value={googleData}>
      <TorontoBg />
      <TopBar />
      <Home />
      <Services />
      <About />
      <Testimonial />
      <ConnectWithUs />
      <Footer />
    </GoogleSheetDataContext.Provider>
  );
}

export default ExternalFrame;
