import React from "react";
import "./Homepage.css"; // Import styling for the home page
import { useNavigate } from "react-router-dom"; // For navigation to the product page
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate("/products"); // Change the route to the product page
  };

  return (
    <div>
        {/* <Navbar /> */}
        <div className="home-page">
        {/* <Navbar /> */}
      <div className="hero-container">
        {/* Background image with overlay */}
          {/* Company Name */}
          {/* <h1 className="company-name">Renergy</h1> */}

          {/* Tagline */}
          {/* <p className="tagline">Revolutionizing Solar Solutions for a Sustainable Future</p> */}

        <div className="hero-content">
          {/* View Products Button */}
          <button className="view-products-btn" onClick={handleViewProducts}>
            View Products
          </button>
        </div>
      </div>
    </div>
    <Aboutus/>
    </div>
  );
};

export default HomePage;
