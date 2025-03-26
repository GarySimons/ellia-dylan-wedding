import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";

const Location = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Location</h1>
        <p className="page-text bold-link">
          <a href="https://www.southstokebarn.co.uk/">
            www.southstokebarn.co.uk
          </a>
        </p>
        <p className="page-text">
          Exit the A27, enter Arundel and then head towards the Black Rabbit
          pub. Take the road behind the pub, and then turn left at the top of
          the hill. Follow the road round to South Stoke - it is on the left.
        </p>
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Location;
