import React from "react";

import "./FooterStyles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>
        design&nbsp;&nbsp;|&nbsp;&nbsp;build&nbsp;&nbsp;|&nbsp;&nbsp;&copy;
        copyright {currentYear}:{" "}
        <a
          href="https://www.garysimons.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          G Coldwell-Simons
        </a>
      </p>
    </div>
  );
};

export default Footer;
