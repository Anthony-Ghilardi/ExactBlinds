import React from "react";
import "./navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <img className="navbar-logo-img" src={logo} alt="Exact Blinds Logo"></img>
        </a>
        </div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li>
              <a href="/fauxWood">Faux Wood</a>
            </li>
            <li>
              <a href="/cellular">Cellular Shades</a>
            </li>
            <li>
              <a href="/vinyl">Vinyl</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
            <a href="/contact" className="contact-link">
            Developer
            </a>
        </div>
    </nav>
  );
}