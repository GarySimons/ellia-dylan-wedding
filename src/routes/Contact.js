import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1>Contact</h1>
        <EmailForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
