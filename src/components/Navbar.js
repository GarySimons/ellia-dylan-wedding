import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyles.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setHamburgerClick(!hamburgerClick);

  useEffect(() => {
    if (hamburgerClick) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [hamburgerClick]);

  return (
    <div className="header">
      <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
        <p className="logo">E&D</p>
      </Link>
      <div className="nav-links-container">
        <ul className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/details"
              className={location.pathname === "/details" ? "active-link" : ""}
            >
              DETAILS
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className={location.pathname === "/location" ? "active-link" : ""}
            >
              LOCATION
            </Link>
          </li>
          <li>
            <Link
              to="/accommodation"
              className={
                location.pathname === "/accommodation" ? "active-link" : ""
              }
            >
              ACCOMMODATION
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active-link" : ""}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/save-the-date"
              className={
                location.pathname === "/save-the-date" ? "active-link" : ""
              }
            >
              SAVE THE DATE
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {hamburgerClick ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#692a32" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
