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
          <p className="page-subtile">The wedding of</p>
          <p className="page-subtile bold">
            Ellia Coldwell-Simons & Dylan Scalet
          </p>
          <p className="page-text bold">Date</p>
          <p className="page-text">Sat 25 May 2026</p>
          <p className="page-text bold">Location</p>
          <p className="page-text">
            South Stoke Barn, Arundel, West Sussex BN18 9PF
          </p>
          <p className="page-text link">
            <Link to="/location">Directions</Link>
          </p>
          <p className="page-text bold">Time</p>
          <p className="page-text">13.00</p>
          <p className="page-text bold">Dress Code</p>
          <p className="page-text">Smart Casual</p>
          <p className="page-text bold">Accommodation</p>
          <p className="page-text">Here are a few local options</p>
          <p className="page-text link">
            <Link to="/accommodation">Places to stay</Link>
          </p>
          <p className="page-text bold">Evening event</p>
          <p className="page-text">19:00</p>
          <p className="page-text bold">Carriages</p>
          <p className="page-text">23:30</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
