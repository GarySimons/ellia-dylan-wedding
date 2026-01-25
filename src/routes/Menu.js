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
          page
        </p>
        <div className="div-flex-menu">
          <div>
            <p className="page-text bold overline">Canapes</p>
            <p className="page-text no-margin">A selection of:</p>
            <p className="page-text no-margin">Mini Yorkshire puddings (v)</p>
            <p className="page-text no-margin">Pesto mousse crostini (v) </p>
            <p className="page-text no-margin">Onion bhajis (vg)</p>
            <p className="page-text no-margin">Fruit skewer (vg)</p>
            <p className="page-text no-margin">Mini sausages</p>
            <p className="page-text">Chicken skewers</p>
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
                Roast chicken with roast potatoes, veg and Yorkshire pudding
              </p>
              <p className="page-text menu-overline">
                Seared salmon with garlic new potatoes and asparagus in a dill
                sauce
              </p>
              <p className="page-text menu-overline">
                Baked butternut squash with couscous, feta and tenderstem
                broccoli (v/vg)
              </p>
            </div>

            <div className="div-flex-one">
              <p className="page-text bold overline">Dessert</p>
              <p className="page-text">Sticky toffee pudding</p>
              <p className="page-text menu-overline">
                Lemon tart with fruit compote
              </p>
              <p className="page-text menu-overline">Chocolate torte (vg)</p>
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
              American style hotdogs with potato wedges
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
