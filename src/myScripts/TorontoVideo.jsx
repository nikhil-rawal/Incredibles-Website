import React from "react";

function TorontoVideo() {
  return (
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
  );
}

export default TorontoVideo;
