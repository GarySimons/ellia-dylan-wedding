import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Details</h1>
        <div className="page-content-container">
          <p className="page-subtitle">The wedding of</p>
          <p className="page-subtitle bold">
            Ellia Coldwell-Simons & Dylan Scalet
          </p>
          <p className="page-text bold">Date</p>
          <p className="page-text">Sat 23 May 2026</p>
          <p className="page-text bold">Location</p>
          <p className="page-text">
            South Stoke Barn,
            <br />
            Arundel,
            <br />
            West Sussex
            <br />
            BN18 9PF
          </p>
          <p className="page-text link">
            <a href="https://www.southstokebarn.co.uk/" target="_blank">
              www.southstokebarn.co.uk
            </a>
          </p>
          <p className="page-text link">
            <Link to="/location">Directions</Link>
          </p>
          <p className="page-text bold">Dress Code</p>
          <p className="page-text">Smart Casual</p>
          <p className="page-text bold">Accommodation</p>
          <p className="page-text">Here are a few local options</p>
          <p className="page-text link">
            <Link to="/accommodation">Places to stay</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
