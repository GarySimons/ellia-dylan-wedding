import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./EmailFormStyles.scss";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Send email
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Using EmailJS to send the email
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Access service ID from environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Access template ID from environment variable
        e.target, // Send the entire form as input
        process.env.REACT_APP_EMAILJS_USER_ID // Access user ID from environment variable
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailForm;
