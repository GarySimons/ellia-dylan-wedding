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
          <p className="page-text bold overline">Date</p>
          <p className="page-text margin-bottom">Saturday 23rd May 2026</p>

          <p className="page-text bold overline">Location</p>
          <img
            src={barnIllo}
            alt="South Lodge illustration"
            className="barn-image-details"
          />
          <p className="page-text">
            South Stoke Barn, <br />
            Arundel, West Sussex, BN18 9PF
          </p>
          <p className="page-text link">
            <a
              href="https://www.southstokebarn.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.southstokebarn.co.uk
            </a>
          </p>
          <p className="page-text link margin-link-bottom">
            <Link to="/location">Directions</Link>
          </p>

          <p className="page-text bold overline">Dress Code</p>
          <div className="div-flex-row">
            <img
              src={dressIllo}
              alt="red dress illustration"
              className="red-dress-illo"
            />
            <img src={kiltIllo} alt="Kilt illustration" className="kilt-illo" />
          </div>
          <p className="page-text">
            Formal and fun, colours are welcome. <br />
            But mostly we'd like you to wear something that makes you feel good!
          </p>
          <p className="page-text">
            For those who want to wear kilts, we have a personal discount
            available on kilts rented from <b>Macgregor and Macduff</b>. Upon
            booking, you will need to reference{" "}
            <b>Dylan Scalet's group booking</b> to qualify for the discount.
          </p>

          <p className="page-text">You can view what is available here:</p>
          <a
            href="https://macgregorandmacduff.co.uk/collections/kilt-hire "
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="page-text link margin-bottom">
              www.macgregorandmacduff.co.uk
            </p>
          </a>

          <p className="page-text">
            When you're ready to confirm your rental, speak to our direct
            contact:
          </p>
          <a href="mailto:lauren@macgregorandmacduff.co.uk">
            <p className="page-text link margin-link-bottom">
              lauren@macgregorandmacduff.co.uk
            </p>
          </a>

          <p className="page-text bold overline">Gifts</p>
          <p className="page-text margin-bottom">
            Xxxxxxx xxxxxx xxx xxxxxx xxxxx xxxxx xxxxx xxxx xxxx xxxx xxxx xxxx
          </p>
          <p className="page-text bold overline">Accommodation</p>
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
