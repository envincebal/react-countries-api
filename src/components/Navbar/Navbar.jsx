import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Where in the world?</h1>
      <div className="mode-toggle">
        <i className="fas fa-moon"></i>
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Navbar;
