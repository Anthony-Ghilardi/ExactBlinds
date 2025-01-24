import React from "react";
import { Link } from "react-router-dom";
import "./home-navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";

export default function HomeNavbar() {
  return (
    <nav className="home-navbar-container">
      <div className="home-navbar-left">
        <Link to="/" className="home-navbar-logo">
          <img
            className="navbar-logo-img"
            src={logo}
            alt="Exact Blinds Logo"
          ></img>
        </Link>
      </div>
      <div className="home-navbar-center">
        <Link to="/howto" className="home-navbar-tutorial">
          How To
        </Link>
      </div>
      <div className="home-navbar-right">
        <Link to="/contact" className="home-contact-link">
          Developer
        </Link>
      </div>
    </nav>
  );
}
