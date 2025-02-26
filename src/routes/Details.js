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
          <p className="page-text bold">xxx</p>
          <p className="page-text">xxx</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
