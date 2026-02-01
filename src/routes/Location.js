import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";

const Location = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Location</h1>
        <p className="page-text">
          <b>South Stoke Barn, Arundel, West Sussex, BN18 9PF</b>
        </p>
        <p className="page-text bold-link">
          <a
            href="https://www.southstokebarn.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.southstokebarn.co.uk
          </a>
        </p>
        <div className="map-container">
          <Map />
        </div>

        <p className="page-text bold overline">By Train</p>
        <p className="page-text">
          South Stoke Barn is a 10 minute taxi journey from Arundel Train
          Station.
        </p>
        <p className="page-text">
          <b>From Brighton</b>
          <br />
          Train from Brighton Station to Ford, then change for direct train to
          Arundel.
        </p>

        <p className="page-text">
          <b>From Gatwick</b>
          <br />
          Direct trains available from Gatwick to Arundel.
        </p>
        <p className="page-text margin-bottom">
          <b>From London</b>
          <br />
          Direct trains to Arundel available from London Victoria, Clapham
          Junction and East Croydon.
        </p>
        <p className="page-text bold overline">By Car</p>
        <p className="page-text">
          From Arundel town centre, follow Mill Road past Swanbourne Tearoom,
          towards The Black Rabbit Pub. Once at the pub, continue on the country
          lane behind the pub and turn left at the top of the hill. Follow the
          road to South Stoke, the barn is on your left.
        </p>
        <p className="page-text margin-bottom">
          Alternatively, enter <b>'South Stoke Barn'</b> into Google Maps.
        </p>
        <p className="page-text bold overline">Parking info</p>
        <p className="page-text margin-bottom">
          Free parking on site is available in the paddock opposite the barn,
          which will be clearly sign posted on the day. Your car can be left
          over night to be collected by 2pm the next day.
        </p>

        <p className="page-text bold overline">Local Taxi Companies</p>
        <p className="page-text">
          There are several local taxi companies, there is a strong
          recommendation that you prebook.
        </p>
        <p className="page-text">
          <b>Castle Cars</b> <br />
          01903 884444 or 01903 889988
        </p>
        <a
          href="https://www.castlecarsltd.co.uk/booking-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="page-text link">www.castlecarsltd.co.uk</p>
        </a>

        <p className="page-text">
          <b>Western Cars</b> <br />
          01903 500600
        </p>
        <a
          href="https://westerncars.com/western-cars-arundel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="page-text link">www.westerncars.com</p>
        </a>

        <p className="page-text">
          <b>Arrow Taxi Group</b> <br />
          01903212121
        </p>
        <a
          href="https://arrowtaxigroup.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="page-text link">www.arrowtaxigroup.co.uk</p>
        </a>
        <p className="page-text">
          <b>Uber</b> also operates within Arundel.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
