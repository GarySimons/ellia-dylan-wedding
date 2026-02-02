import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import barnIllo from "../assets/images/south_stoke_barn.png";
import dressIllo from "../assets/images/red-dress.png";
import kiltIllo from "../assets/images/kilt.png";
import QRCodeMonzo from "../assets/images/qr-code-one.png";
import QRCodePayPal from "../assets/images/qr-code-two.jpeg";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Details</h1>
        <div className="page-content-container">
          <p className="page-text bold">Date</p>
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
          <p className="page-text">
            <b>
              Your presence at our wedding is truly the greatest gift we could
              ask for.
            </b>
          </p>
          <p className="page-text">
            If you do feel inclined to give something, a contribution toward our
            honeymoon would be deeply appreciated. You can pay into our Monzo or
            PayPal accounts by scanning the QR codes below. Alternatively, we
            will have a place to safely store cards on the day.
          </p>
          <p className="page-text margin-bottom">
            Thank you. We're so grateful to celebrate with you!
          </p>

          <div className="div-flex-mob-qr-code">
            <div className="qr-white-box">
              <img
                src={QRCodeMonzo}
                alt="Monzo QR code"
                className="qr-code-monzo"
              />
              <p className="page-text bold">
                Scan for <br />
                Monzo Account
              </p>
            </div>
            <div className="qr-white-box">
              <img
                src={QRCodePayPal}
                alt="PayPal QR code"
                className="qr-code-paypal"
              />
              <p className="page-text bold">
                Scan for <br />
                PayPal Account
              </p>
            </div>
          </div>
          <p className="page-text bold overline">Accommodation</p>
          <p className="page-text">Here are a few local options</p>
          <p className="page-text link-with-bottom-margin">
            <Link to="/accommodation">Places to stay</Link>
          </p>
          <p className="page-text link bold">
            <Link to="/rsvp">
              <b>Please RSVP by 31st March</b>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
