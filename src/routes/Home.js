import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import barnIllo from "../assets/images/south_stoke_barn.png";
import flowerOne from "../assets/images/flower-1.png";
import flowerTwo from "../assets/images/flower-2.png";
import flowerThree from "../assets/images/flower-3.png";
import flowerFour from "../assets/images/flower-4.png";
import flowerFive from "../assets/images/flower-5.png";
import flowerSix from "../assets/images/flower-6.png";
import flowerSeven from "../assets/images/flower-7.png";
import flowerEight from "../assets/images/flower-8.png";
import flowerNine from "../assets/images/flower-9.png";
import redFlowerOne from "../assets/images/red-flower-1.png";
import redFlowerThree from "../assets/images/red-flower-3.png";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <div className="div-flex-row flowers">
          <img src={flowerEight} alt="Flower" className="flower-three-illo" />
          <img src={flowerTwo} alt="Flower" className="flower-three-illo" />
          <img src={flowerThree} alt="Flower" className="flower-three-illo" />
          <img
            src={redFlowerThree}
            alt="Flower"
            className="flower-three-illo"
          />
          <img src={flowerFive} alt="Flower" className="flower-three-illo" />
          <img src={flowerSix} alt="Flower" className="flower-three-illo" />

          <img src={flowerNine} alt="Flower" className="flower-three-illo" />
          <img src={flowerOne} alt="Flower" className="flower-three-illo" />
        </div>

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
