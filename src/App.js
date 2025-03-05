// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Components/Homepage"; // Import the Home Page
// import SolarBot from "./Components/SolarBot"; // Import the Product Page

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} /> {/* Home Page */}
//         <Route path="/products" element={<SolarBot />} /> {/* Products Page */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';
import SolarBot from './Components/SolarBot';
import Homepage from './Components/Homepage';

// import Aboutus from './Components/Aboutus';

const Home = () => <h1>Home Page</h1>;
const Products = () => <h1>Products Page</h1>;
const AboutUs = () => <h1>About Us Page</h1>;
const ContactUs = () => <h1>Contact Us Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      {/* <SolarBot /> */}
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<SolarBot />} />
        <Route path="/about-us" element={<Aboutus />} />
        {/* <Route path="/contact-us" element={<Contactus />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
