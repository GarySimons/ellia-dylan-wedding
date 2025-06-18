import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";
import NavbarSaveDate from "../components/NavbarSaveDate";
import SaveForm from "../components/SaveForm";

const Contact = () => {
  return (
    <div>
      <NavbarSaveDate />
      <div className="main-container">
        <h1 className="page-heading">RSVP</h1>
        <SaveForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
