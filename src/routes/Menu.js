import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import redFlowerOne from "../assets/images/red-flower-1.png";
import redFlowerTwo from "../assets/images/red-flower-2.png";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Menu</h1>
        <p className="page-subtext bottom-margin">
          Please choose from the menu and let us know your choices via the{" "}
          <span className="text-link">
            <Link to="/rsvp">RSVP</Link>
          </span>
          page.
        </p>
        <div className="div-flex-menu">
          <div>
            <p className="page-text bold overline">Canapes</p>
            <p className="page-text no-margin">A selection of:</p>
            <p className="page-text no-margin">Mini Yorkshire Puddings (v)</p>
            <p className="page-text no-margin">Pesto Mousse Crostini (v) </p>
            <p className="page-text no-margin">Onion Bhajis (vg)</p>
            <p className="page-text no-margin">Fruit Skewer (vg)</p>
            <p className="page-text">Mini Sausages and Chicken Skewers</p>
          </div>

          <img
            src={redFlowerOne}
            alt="Red flower"
            className="flower-one-illo"
          />

          <div className="div-flex-mob-menu">
            <div className="div-flex-one">
              <p className="page-text bold overline">Starter</p>
              <p className="page-text">Melon and parma ham with rocket salad</p>
              <p className="page-text menu-overline">
                Tempura prawns with sweet chilli sauce and rocket
              </p>
              <p className="page-text menu-overline">
                Creamy garlic mushrooms on parsley buttered ciabatta (v/vg)
              </p>
            </div>

            <div className="div-flex-one">
              <p className="page-text bold overline">Main</p>
              <p className="page-text">
                Roast Chicken with Roast Potatoes, Veg and Yorkshire Pudding
              </p>
              <p className="page-text menu-overline">
                Seared Salmon with Garlic New Potatoes and Asparagus in a Dill
                Sauce
              </p>
              <p className="page-text menu-overline">
                Baked Butternut Squash with Couscous, Feta and Tenderstem
                Broccoli (v/vg)
              </p>
            </div>

            <div className="div-flex-one">
              <p className="page-text bold overline">Dessert</p>
              <p className="page-text">Sticky Toffee Pudding</p>
              <p className="page-text menu-overline">
                Lemon Tart with Fruit Compote
              </p>
              <p className="page-text menu-overline">Chocolate Torte (vg)</p>
            </div>
          </div>
          <img
            src={redFlowerTwo}
            alt="Red flower"
            className="flower-two-illo"
          />
          <div>
            <p className="page-text bold overline">Evening Food</p>
            <p className="page-text">
              American Style Hotdogs with Potato Wedges
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
