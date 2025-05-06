import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./EmailFormStyles.scss";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attendance: "", // ✅ Added attendance field
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message, attendance } = formData;

    if (!name || !email || !message || !attendance) {
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
            message: "",
            attendance: "",
          });
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

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
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
          />
        </div>

        {/* ✅ Attendance radio buttons */}
        <div>
          <p>Will you be attending?</p>
          <label>
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={formData.attendance === "yes"}
              onChange={handleInputChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={formData.attendance === "no"}
              onChange={handleInputChange}
              required
            />
            No
          </label>
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Please send us a message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailForm;
