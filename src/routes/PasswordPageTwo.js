import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Footer from "../components/Footer";
import barnIllo from "../assets/images/south_stoke_barn.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PASSWORD = process.env.REACT_APP_SITE_PASSWORD;

function PasswordPageTwo() {
  const [input, setInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectPasswordMessage, setIncorrectPasswordMessage] =
    useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      login();
      navigate("/home");
    } else {
      setIncorrectPasswordMessage(true);
      setTimeout(() => setIncorrectPasswordMessage(""), 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="main-container">
        <h1 className="page-heading password">Ellia & Dylan's Wedding</h1>
        <p className="page-subtext">Please enter the supplied password</p>
        <div className="password-form-container">
          <form onSubmit={handleSubmit} className="password-form">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="password-input"
                placeholder="Enter password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <VisibilityOffIcon
                    sx={{
                      height: "1.3rem",
                      marginTop: "0.2rem",
                      color: "#b5100d",
                    }}
                  />
                ) : (
                  <VisibilityIcon
                    sx={{
                      height: "1.3rem",
                      marginTop: "0.2rem",
                      color: "#b5100d",
                    }}
                  />
                )}
              </span>
            </div>
            <button type="submit" className="password-button">
              Enter
            </button>
          </form>
          <img
            src={barnIllo}
            alt="South Lodge illustration"
            className="barn-image-password"
          />
        </div>

        {incorrectPasswordMessage && (
          <div className="success-message">
            <p>Incorrect password</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PasswordPageTwo;
