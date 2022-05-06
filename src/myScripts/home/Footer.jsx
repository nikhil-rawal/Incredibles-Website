import React from "react";

function Footer() {
  return (
    <div
      style={{
        marginTop: "20vh",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }}
    >
      <span className="footer_span">
        &#169;2021, Incredibles, India, Inc. All rights reserved.
      </span>
      <br />
      <span className="footer_span">
        Made with ❤️ by{" "}
        <a
          href="https://nikhil-rawal-portfolio.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="footer_link"
        >
          Nikhil Rawal
        </a>
      </span>
      <br />
    </div>
  );
}

export default Footer;
