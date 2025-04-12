import React from "react";
import { Link } from "react-router-dom";
import "./home-navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";

export default function HomeNavbar() {
  return (
    <nav className="home-navbar-container">
      <div className="home-navbar-left">
        <Link to="/" className="home-navbar-logo">
          <img className="navbar-logo-img" src={logo} alt="Exact Blinds Logo" />
        </Link>
      </div>
      <div className="home-navbar-links">
        <Link to="/howto" className="home-navbar-link">
          How To
        </Link>
        <Link to="/designer" className="home-navbar-link">
          Designer
        </Link>
        <Link to="/contact" className="home-navbar-link">
          Developer
        </Link>
      </div>
    </nav>
  );
}
