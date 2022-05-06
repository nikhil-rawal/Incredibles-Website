import React, { useState, useEffect } from "react";
import Axios from "axios";
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
        "https://docs.google.com/spreadsheets/d/15-ng2RnWZwg2mYt-hcjKWwo-2ePA-AgfyAWWKpnRcaE/pub?output=csv",
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
    // return parsedData;
  }
  // const apiSheet = process.env.REACT_APP_APISHEETKEY;
  // const apiSheet = `https://api.sheety.co/20ef431b3c9a6e816e15cb7cdb99c644/tryApiForIncredibes/sheet1`;

  // function logError(err) {
  //   seterror([err.response]);
  //   console.error("An Error has been occured", error);
  // }

  // async function callGoogleSheet() {
  //   try {
  //     const reqAPISheetData = await Axios.get(apiSheet);
  //     setData((prevData) => (prevData = reqAPISheetData.data.sheet1));
  //   } catch (err) {
  //     if (err.response) {
  //       console.error(`Error occured. ${err.response}`);
  //       logError(err);
  //     } else if (err.request) {
  //       console.error(`Error occured. ${err.request}`);
  //       logError(err);
  //     } else {
  //       console.error(`Error occured. ${err}`);
  //       logError(err);
  //     }
  //   }
  // }

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
