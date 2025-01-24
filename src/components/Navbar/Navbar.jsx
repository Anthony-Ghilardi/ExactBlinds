import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img
            className="navbar-logo-img"
            src={logo}
            alt="Exact Blinds Logo"
          ></img>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <Link to="/fauxWood">Faux Wood</Link>
          </li>
          <li>
            <Link to="/cellular">Cellular Shades</Link>
          </li>
          <li>
            <Link to="/vinyl">Vinyl</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/contact" className="contact-link">
          Developer
        </Link>
      </div>
    </nav>
  );
}
