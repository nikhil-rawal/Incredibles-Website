import React from "react";
import { Image } from "react-bootstrap";

function Images(props) {
  return (
    <Image
      className={props.imageClass}
      src={props.imageSrc}
      alt={props.imageAlt}
    />
  );
}

export default Images;
