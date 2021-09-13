import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleMode }) => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <h2>Where in the world?</h2>
        <div className="mode-toggle" onClick={toggleMode}>
          <i className="fas fa-moon"></i>
          <span> Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
