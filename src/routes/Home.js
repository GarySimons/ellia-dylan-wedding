import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <h1>HOME</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
