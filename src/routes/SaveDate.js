import React from "react";
import Footer from "../components/Footer";
import waxSeal from "../assets/wax-seal.png";
import "./HomeStyles.scss";
import ReusableButton from "../components/Shared/ReusableButton";

const SaveDate = () => {
  return (
    <div>
      <div className="home-main-container save">
        <h1 className="save-heading">Save the Date</h1>
        <div className="ranged-left-container">
          <p className="wedding">THE WEDDING OF</p>
        </div>
        <div className="name-container">
          <h1 className="name ellia">Ellia</h1>
          <h1 className="name and">&</h1>
          <h1 className="name dylan">Dylan</h1>
        </div>
        <div className="home-date-container save">
          <p className="home-date save">23.05.26</p>
          <hr className="home-line" />
          <p className="home-address">SOUTH STOKE BARN, ARUNDEL, WEST SUSSEX</p>
        </div>
        <div className="save-container">
          <ReusableButton to="/rsvp">RSVP</ReusableButton>
          <ReusableButton to="/accommodation">ACCOMMODATION</ReusableButton>
        </div>
        <img src={waxSeal} alt="Wax Seal" className="wax-image save" />
      </div>

      <Footer />
    </div>
  );
};

export default SaveDate;
