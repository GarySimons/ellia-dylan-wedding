import React from "react";
import "./ReusableButtonStyles.scss";
import { Link } from "react-router-dom";

const ReusableButton = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={`reusable-button ${className}`}>
      {children}
    </Link>
  );
};

export default ReusableButton;
