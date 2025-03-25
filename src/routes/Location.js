import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import MapTwo from "../components/MapTwo";

const Location = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Location</h1>
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default Location;
