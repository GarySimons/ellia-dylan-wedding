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
          <p className="page-text bold">Date</p>
          <p className="page-text">Saturday 23rd May 2026</p>
          <img
            src={barnIllo}
            alt="South Lodge illustration"
            className="barn-image-details"
          />
          <p className="page-text bold">Location</p>
          <p className="page-text">
            South Stoke Barn, <br />
            Arundel, West Sussex, BN18 9PF
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
            Formal and fun (kilts and colours welcome!)
          </p>
          <p className="page-text bold">Gifts</p>
          <p className="page-text">
            Xxxxxxx xxxxxx xxx xxxxxx xxxxx xxxxx xxxxx xxxx xxxx xxxx xxxx xxxx
          </p>
          <p className="page-text bold">Accommodation</p>
          <p className="page-text">Here are a few local options</p>
          <p className="page-text link-with-bottom-margin">
            <Link to="/accommodation">Places to stay</Link>
          </p>
          <p className="page-text link bold">
            <Link to="/rsvp">Please RSVP by 31st March</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
