import React, { useState, useEffect } from "react";
import Axios from "axios";

import TopBar from "./topBar/TopBar";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import TorontoBg from "./bgVideo/TorontoBg";
import Testimonial from "./testimonials/Testimonial";

export const GoogleSheetDataContext = React.createContext();

function ExternalFrame() {
  const [data, setData] = useState([]);
  const [error, seterror] = useState(null);
  const apiSheet = process.env.REACT_APP_APISHEETKEY;
  // const apiSheet = `https://api.sheety.co/20ef431b3c9a6e816e15cb7cdb99c644/tryApiForIncredibes/sheet1`;

  async function callGoogleSheet() {
    try {
      const reqAPISheetData = await Axios.get(apiSheet);
      setData((prevData) => (prevData = reqAPISheetData.data.sheet1));
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
  }

  const googleData = Array.from(data);

  useEffect(() => {
    callGoogleSheet();
  }, []);

  return (
    <GoogleSheetDataContext.Provider value={googleData}>
      <TorontoBg />
      <TopBar />
      <Home />
      <Services />
      <About />
      <Testimonial />
    </GoogleSheetDataContext.Provider>
  );
}

export default ExternalFrame;
