import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import waxSeal from "../assets/wax-seal.png";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
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
        <img src={waxSeal} alt="Wax Seal" className="wax-image" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
