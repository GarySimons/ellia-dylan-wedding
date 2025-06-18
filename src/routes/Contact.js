import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";
import NavbarSaveDate from "../components/NavbarSaveDate";

const Contact = () => {
  return (
    <div>
      <NavbarSaveDate />
      <div className="main-container">
        <h1 className="page-heading">RSVP</h1>
        <EmailForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
