import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
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
      <Link to="/">
        <p className="logo">E&D</p>
      </Link>
      <div className="nav-links-container">
        <ul className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/details">DETAILS</Link>
          </li>
          <li>
            <Link to="/location">LOCATION</Link>
          </li>
          <li>
            <Link to="/accommodation">ACCOMMODATION</Link>
          </li>
          <li>
            <Link to="/accommodation-grid">ACCOMMODATION GRID</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {hamburgerClick ? (
            <FaTimes size={20} style={{ color: "#000000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000000" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
