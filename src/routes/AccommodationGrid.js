import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hotelsData from "../assets/data/hotels.json";

const AccommodationGrid = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Accommodation Grid</h1>
        {hotels.map((hotel, index) => (
          <div key={index}>
            <p className="page-text bold">{hotel.name}</p>
            <p className="page-text no-margin">{hotel.address}</p>
            <p className="page-text">{hotel.phone}</p>
            <a href={hotel.website} target="_blank" rel="noopener noreferrer">
              <p className="page-text link">{hotel.websiteName}</p>
            </a>
            <br />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AccommodationGrid;
