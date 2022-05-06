import React from "react";
import Images from "../heads/Images";
import { Container } from "react-bootstrap";

function TorontoBg() {
  return (
    <div className="torontoBg_Div">
      <Images
        key="bgToronto"
        imageClass="home_bgToronto"
        imageSrc="assets/svg/home_toronto.svg"
        imageAlt="Toronto Background"
      />
    </div>
  );
}

export default TorontoBg;

/*

<>
      <video
        autoPlay="autoplay"
        muted
        loop="loop"
        className="home_torontovideo"
        poster="assets/pics/toronto_poster.png"
        allowFullScreen
      >
        <source
          src="assets/vids/home_toronto.mp4"
          type="video/mp4"
          // style={{ width: "150%" }}
        />
      </video>
    </>

    */
