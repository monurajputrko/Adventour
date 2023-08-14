import React from "react";
import { NavLink } from "react-router-dom";
import "./DNavbar.css";
import DFooter from "../Footer/DFooter";

const DNavbar = () => {
  return (
    <div className="navbar">
      <div className="NavBox"></div>
      <nav className="NavbarItems">
        <img
          style={{ paddingTop: "15px", marginRight: "-70px" }}
          src="https://adventour-app.vercel.app/static/media/logo.c4d46c4063175340fdd8.png"
          width={75}
          height={40}
        />
        <h1 className="logo">Adventour.</h1>

        <ul>
          <li className="navItem">Services</li>

          <li className="navItem">Categories</li>

          <li className="navItem">About Us</li>
          <button className="nav-Btn">Get Started</button>
          <span>☰</span>
        </ul>
      </nav>
    </div>
  );
};

export default DNavbar;
