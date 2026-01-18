import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Order of Service</h1>
        <div className="page-content-container">
          <p className="page-text bold">Date</p>
          <p className="page-text">Sat 23 May 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
