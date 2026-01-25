import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import barnIllo from "../assets/images/south_stoke_barn.png";
import redFlowerThree from "../assets/images/red-flower-3.png";

import "./HomeStyles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <img
          src={redFlowerThree}
          alt="Red flower"
          className="flower-three-illo"
        />
        <div className="ranged-left-container">
          <p className="wedding">THE WEDDING OF</p>
        </div>
        <div className="name-container">
          <h1 className="name ellia">Ellia</h1>
          <h1 className="name and">&</h1>
          <h1 className="name dylan">Dylan</h1>
        </div>
        <div className="home-date-container">
          <p className="home-date">23.05.26</p>
          <hr className="home-line" />
          <p className="home-address">SOUTH STOKE BARN, ARUNDEL, WEST SUSSEX</p>
        </div>
        <img
          src={barnIllo}
          alt="South Lodge illustration"
          className="barn-image-save"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
