import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ringsIllo from "../assets/images/rings.png";
import champagneIllo from "../assets/images/champagne.png";
import confettiIllo from "../assets/images/confetti.png";
import glitterballIllo from "../assets/images/glitterball.png";
import eatingIllo from "../assets/images/eating.png";
import taxiIllo from "../assets/images/taxi.png";
import cocktailIllo from "../assets/images/cocktail.png";
import cameraIllo from "../assets/images/camera.png";
import { Link } from "react-router-dom";

const OrderOld = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Order of Celebrations</h1>
        <div className="page-content-container">
          <img
            src={ringsIllo}
            alt="rings illustration"
            className="rings-illo"
          />
          <p className="page-text bold">
            We will be married in a small ceremony <br />
            prior to our arrival at the barn
          </p>
        </div>

        <img
          src={champagneIllo}
          alt="Champagne illustration"
          className="champagne-illo"
        />
        <p className="page-text bold">1:30pm</p>
        <p className="page-text">Guests Arrival</p>

        <img
          src={confettiIllo}
          alt="Confetti illustration"
          className="confetti-illo"
        />
        <p className="page-text bold">2pm</p>
        <p className="page-text">Confetti Walk</p>
        <div className="div-flex-row">
          <img
            src={cocktailIllo}
            alt="Cocktail illustration"
            className="cocktail-illo"
          />
          <img
            src={cameraIllo}
            alt="Camera illustration"
            className="camera-illo"
          />
        </div>

        <p className="page-text bold">2:15pm</p>
        <p className="page-text">Canapes, Photos & Drinks</p>

        <img
          src={eatingIllo}
          alt="Plate illustration"
          className="eating-illo"
        />
        <p className="page-text bold">3:45pm</p>
        <p className="page-text">Wedding Breakfast</p>

        <img
          src={glitterballIllo}
          alt="Glitterball illustration"
          className="glitterball-illo"
        />
        <p className="page-text bold">6pm</p>
        <p className="page-text">Drinks & Dancing</p>

        <img src={taxiIllo} alt="Taxi illustration" className="taxi-illo" />
        <p className="page-text bold">11pm</p>
        <p className="page-text">Carriages</p>
      </div>
      <Footer />
    </div>
  );
};

export default OrderOld;
