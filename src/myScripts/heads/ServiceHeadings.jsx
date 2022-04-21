import React from "react";

function ServiceHeadings(props) {
  return (
    <p>
      <span className="services_services_points">
        <strong>{props.heading}</strong>
      </span>
      <br />
      <span className="services_services_points">{props.subheading}</span>
    </p>
  );
}

export default ServiceHeadings;
