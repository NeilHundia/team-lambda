// import React from "react";
// import "./Navbar.css"; // For Navbar-specific styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h1 className="company-name">RenergyX</h1>
//       </div>
//       <div className="navbar-right">
//         <button className="nav-btn">Home</button>
//         <button className="nav-btn">Products</button>
//         <button className="nav-btn">About Us</button>
//         <button className="nav-btn">Contact Us</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react'
// import './Navbar.css';
// // import { assets } from '../../assets/assets';

// const Navbar = () => {
//     const [menu,setMenu] = useState("home");

//   return (
//     <div className='navbar'>
//       <img src="../Assets/Images/LambdaLogo.png" alt="logo" className='logo' />
//       <ul className="navbar-menu">
//         <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>home</li>
//         <li onClick={()=> setMenu("menu")} className={menu==="menu"?"active" : ""}>products</li>
//         <li onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active" : ""}>about us</li>
//         <li onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active" : ""}>contact us</li> 
//       </ul>
//       {/* <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className='navbar-search-icon'>
//             <img src={assets.basket_icon} alt="" />
//             <div className="dot"></div>
//         </div>
//         <button>Sign in</button>
//       </div> */}
//     </div>
//   )
// }

// export default Navbar

// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LambdaLogo from '../Assets/Images/LambdaLogo.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <img src={LambdaLogo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
          <Link to="/">home</Link>
        </li>
        <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          <Link to="/products">products</Link>
        </li>
        <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>
          <Link to="/about-us">about us</Link>
        </li>
        <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>
          <Link to="/contact-us">contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
