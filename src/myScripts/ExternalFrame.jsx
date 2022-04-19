import React from "react";
import TopBar from "./topBar/TopBar";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import TorontoVideo from "./TorontoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function ExternalFrame() {
  return (
    <BrowserRouter>
      <TorontoVideo />
      <TopBar />
      <Home />
      <Services />
      <About />
    </BrowserRouter>
  );
}

export default ExternalFrame;

/*

<Routes>
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      */
