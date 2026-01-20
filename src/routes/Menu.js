import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Menu</h1>
        <p className="page-subtext">
          Please choose from the menu and let us know your choices via the{" "}
          <span className="text-link">
            <Link to="/rsvp">RSVP</Link>
          </span>
          page.
        </p>
        <div className="div-flex-menu">
          <div>
            <p className="page-text bold">menu subhead</p>
            <p className="page-text">menu text</p>
          </div>

          <div className="div-flex-mob-menu">
            <div>
              <p className="page-text bold">menu subhead</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
            </div>

            <div>
              <p className="page-text bold">menu subhead</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
            </div>

            <div>
              <p className="page-text bold">menu subhead</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
              <p className="page-text">menu text</p>
            </div>
          </div>
          <div>
            <p className="page-text bold">menu subhead</p>
            <p className="page-text">menu text</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
