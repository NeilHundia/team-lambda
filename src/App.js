import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage"; // Import the Home Page
import SolarBot from "./Components/SolarBot"; // Import the Product Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/products" element={<SolarBot />} /> {/* Products Page */}
      </Routes>
    </Router>
  );
};

export default App;
