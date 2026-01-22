import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import eatingIllo from "../assets/images/eating.png";
import "./EmailFormStyles.scss";

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    attendance: "",
    guest1: {
      name: "",
      starter: "",
      main: "",
      dessert: "",
    },
    guest2: {
      name: "",
      starter: "",
      main: "",
      dessert: "",
    },
    message: "",
  });

  const starters = [
    "Melon and parma ham with rocket salad",
    "Tempura prawns with sweet chilli sauce and rocket",
    "Creamy garlic mushrooms on parsley buttered ciabatta (v/vg)",
    "No Starter",
  ];
  const mains = [
    "Roast Chicken with Roast Potatoes, Veg and Yorkshire Pudding",
    "Seared Salmon with Garlic New Potatoes and Asparagus in a Dill Sauce",
    "Baked Butternut Squash with Couscous, Feta and Tenderstem Broccoli (v/vg)",
    "No Main",
  ];
  const desserts = [
    "Sticky Toffee Pudding",
    "Lemon Tart with Fruit Compote",
    "Chocolate Torte (vg)",
    "No Dessert",
  ];

  const [status, setStatus] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("saveFormData");
    if (savedData) {
      const parsed = JSON.parse(savedData);

      setFormData((prev) => ({
        ...prev,
        ...parsed,
        guest1: { ...prev.guest1, ...(parsed.guest1 || {}) },
        guest2: { ...prev.guest2, ...(parsed.guest2 || {}) },
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [guest, field] = name.split(".");
      const updated = {
        ...formData,
        [guest]: {
          ...formData[guest],
          [field]: value,
        },
      };
      setFormData(updated);
      localStorage.setItem("saveFormData", JSON.stringify(updated));
    } else {
      const updated = { ...formData, [name]: value };
      setFormData(updated);
      localStorage.setItem("saveFormData", JSON.stringify(updated));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { email, attendance, guest1 } = formData;

    if (!email || !attendance || !guest1.name) {
      setStatus("Please fill out required fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )

      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! Thank you");
          setFormData({
            email: "",
            attendance: "",
            guest1: { name: "", starter: "", main: "", dessert: "" },
            guest2: { name: "", starter: "", main: "", dessert: "" },
            message: "",
          });
          localStorage.removeItem("saveFormData");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        },
      )
      .finally(() => {
        setTimeout(() => setStatus(""), 4000);
      });
  };
  console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  const isDisabled = formData.attendance === "";

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <div className="radio-container">
          {/* <p className="page-subtext">
            Please let us know if you intend on coming, and choose your food
            from the selections below <br className="hide-on-mobile" />
            by 28th February.
          </p> */}
          <p className="page-subtext">
            Please let us know if you intend on coming, and choose your food
            from the selections below by 28th February.
          </p>

          <div className="radio-button-container main">
            <p className="radio-question save-question">
              <b>Will you be attending?</b> <br />
              Please click yes or no. Thank you.
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
            name="guest1.name"
            placeholder="Guest One Name"
            value={formData.guest1.name}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
        </div>
        <p className="radio-question save-question">
          Guest One please choose your meal from the selections below.
        </p>

        <div className="select-wrapper">
          <select
            name="guest1.starter"
            value={formData.guest1.starter}
            onChange={handleInputChange}
            disabled={isDisabled}
          >
            <option value="">Guest One Starter</option>
            {starters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-wrapper">
          <select
            name="guest1.main"
            value={formData.guest1.main}
            onChange={handleInputChange}
            disabled={isDisabled}
          >
            <option value="">Guest One Main</option>
            {mains.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-wrapper">
          <select
            name="guest1.dessert"
            value={formData.guest1.dessert}
            onChange={handleInputChange}
            disabled={isDisabled}
          >
            <option value="">Guest One Dessert</option>
            {desserts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="div-flex ">
          <img
            src={eatingIllo}
            alt="Plate illustration"
            className="eating-illo-form"
          />
        </div>

        <div>
          <input
            type="text"
            name="guest2.name"
            placeholder="Guest Two Name"
            value={formData.guest2.name}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
        </div>
        <p className="radio-question save-question margin-top-radio">
          Guest Two please choose your meal from the selections below.
        </p>
        <div className="select-wrapper">
          <select
            name="guest2.starter"
            value={formData.guest2.starter}
            onChange={handleInputChange}
            disabled={isDisabled}
          >
            <option value="">Guest Two Starter</option>
            {starters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-wrapper">
          <select
            name="guest2.main"
            value={formData.guest2.main}
            onChange={handleInputChange}
            disabled={isDisabled}
          >
            <option value="">Guest Two Main</option>
            {mains.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="select-wrapper">
          <select
            name="guest2.dessert"
            value={formData.guest2.dessert}
            onChange={handleInputChange}
            disabled={isDisabled}
          >
            <option value="">Guest Two Dessert</option>
            {desserts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="div-flex ">
          <img
            src={eatingIllo}
            alt="Plate illustration"
            className="eating-illo-form"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Please let us know any dietary requirements or allergies"
            value={formData.message}
            onChange={handleInputChange}
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
        <div className="success-message">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default RsvpForm;
