import React from "react";
import "./Navbar.css"; // For Navbar-specific styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="company-name">RenergyX</h1>
      </div>
      <div className="navbar-right">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Products</button>
        <button className="nav-btn">About Us</button>
        <button className="nav-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
