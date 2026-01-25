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

const Order = () => {
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
          <p className="page-text ">
            We will be married in a small ceremony <br />
            prior to our arrival at the barn
          </p>
        </div>

        <div className="order-div order-overline">
          <div className="order-left-div">
            <img
              src={champagneIllo}
              alt="Champagne illustration"
              className="champagne-illo"
            />
          </div>
          <div className="order-center-div">
            <p className="page-text bold">1:30pm</p>
          </div>
          <div className="order-right-div">
            <p className="order-text">Guests arrival</p>
          </div>
        </div>

        <div className="order-div order-overline">
          <div className="order-left-div">
            <img
              src={confettiIllo}
              alt="Confetti illustration"
              className="confetti-illo"
            />
          </div>
          <div className="order-center-div">
            <p className="page-text bold">2pm</p>
          </div>
          <div className="order-right-div">
            <p className="order-text">Confetti walk</p>
          </div>
        </div>

        <div className="order-div order-overline">
          <div className="order-left-div">
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
          </div>
          <div className="order-center-div">
            <p className="page-text bold">2.15pm</p>
          </div>
          <div className="order-right-div">
            <p className="order-text">Canapes, photos & drinks</p>
          </div>
        </div>

        <div className="order-div order-overline">
          <div className="order-left-div">
            <img
              src={eatingIllo}
              alt="Plate illustration"
              className="eating-illo"
            />
          </div>
          <div className="order-center-div">
            <p className="page-text bold">3:45pm</p>
          </div>
          <div className="order-right-div">
            <p className="order-text">Wedding breakfast</p>
          </div>
        </div>

        <div className="order-div order-overline">
          <div className="order-left-div">
            <img
              src={glitterballIllo}
              alt="Glitterball illustration"
              className="glitterball-illo"
            />
          </div>
          <div className="order-center-div">
            <p className="page-text bold">6pm</p>
          </div>
          <div className="order-right-div">
            <p className="order-text">Drinks & dancing</p>
          </div>
        </div>

        <div className="order-div order-overline">
          <div className="order-left-div">
            <img src={taxiIllo} alt="Taxi illustration" className="taxi-illo" />
          </div>
          <div className="order-center-div">
            <p className="page-text bold">11pm</p>
          </div>
          <div className="order-right-div">
            <p className="order-text">Carriages</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
