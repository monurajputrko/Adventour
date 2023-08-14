import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">  
    <div className="NavBox"></div>
      <nav className="NavbarItems">
        <h1 className="logo">Adventour.</h1>
        <ul>
          <li className="navItem">Discover</li>
          <li className="navItem">Services</li>
          <li className="navItem">Categories</li>
          <li className="navItem">About Us</li>
          <button className="nav-Btn">Get Started</button>
        </ul>
       
      </nav>
    </div>
  );
};

export default Navbar;
