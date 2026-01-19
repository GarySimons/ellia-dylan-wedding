import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hotelsData from "../assets/data/hotels.json";
import NavbarSaveDate from "../components/NavbarSaveDate";
import { Link } from "react-router-dom";

const Menu = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

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
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <p className="page-text bold">{hotel.name}</p>
              <p className="page-text no-margin">{hotel.address}</p>
              <p className="page-text">{hotel.phone}</p>
              <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                <p className="page-text link">{hotel.websiteName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
