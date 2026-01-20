import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import barnIllo from "../assets/images/south_stoke_barn.png";
import dressIllo from "../assets/images/red-dress.png";
import kiltIllo from "../assets/images/kilt.png";
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
          <img
            src={barnIllo}
            alt="South Lodge illustration"
            className="barn-image-details"
          />
          <p className="page-text bold">Location</p>
          <p className="page-text">
            South Stoke Barn, <br />
            Arundel, West Sussex, <br />
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
          <div className="div-flex-row">
            <img
              src={dressIllo}
              alt="red dress illustration"
              className="red-dress-illo"
            />
            <img src={kiltIllo} alt="Kilt illustration" className="kilt-illo" />
          </div>
          <p className="page-text bold">Dress Code</p>
          <p className="page-text">
            Smart Casual
            <br /> (Kilts welcome)
          </p>
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
