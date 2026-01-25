import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RsvpForm from "../components/RsvpForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">RSVP</h1>
        <RsvpForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
