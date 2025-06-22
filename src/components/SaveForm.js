import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./EmailFormStyles.scss";

const SaveForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
    attendance: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("saveFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);
    localStorage.setItem("saveFormData", JSON.stringify(updatedFormData));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, address, message, attendance } = formData;

    if (!name || !email || !address || !message || !attendance) {
      setStatus("Please fill out all fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! Thank you");
          setFormData({
            name: "",
            email: "",
            address: "",
            message: "",
            attendance: "",
          });
          localStorage.removeItem("saveFormData");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setTimeout(() => setStatus(""), 5000);
      });
  };

  const isDisabled = formData.attendance === "";

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <div className="radio-container">
          <p className="radio-question save">
            Please let us know if you will be attending?
          </p>
          <div className="radio-button-container">
            <label className="radio-label">
              <input
                className="radio-input"
                type="radio"
                name="attendance"
                value="yes"
                checked={formData.attendance === "yes"}
                onChange={handleInputChange}
                required
              />
              <span className="custom-radio"></span>
              <p className="radio-text">Yes</p>
            </label>

            <label className="radio-label">
              <input
                className="radio-input"
                type="radio"
                name="attendance"
                value="no"
                checked={formData.attendance === "no"}
                onChange={handleInputChange}
                required
              />
              <span className="custom-radio"></span>
              <p className="radio-text">No</p>
            </label>
          </div>
        </div>

        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isDisabled}
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isDisabled}
          />
        </div>

        <div>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            disabled={isDisabled}
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Please send us a message"
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isDisabled}
          ></textarea>
        </div>

        <div>
          <button type="submit" disabled={isDisabled}>
            Send
          </button>
        </div>
      </form>

      {status && (
        <div className="succsess-message">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default SaveForm;
