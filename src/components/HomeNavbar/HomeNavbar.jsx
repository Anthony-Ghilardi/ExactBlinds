import React from "react";
import "./home-navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";

export default function HomeNavbar() {
  return (
    <nav className="home-navbar-container">
      <div className="home-navbar-left">
        <a href="/" className="home-navbar-logo">
          <img className="navbar-logo-img" src={logo} alt="Exact Blinds Logo"></img>
        </a>
        </div>
        <div className="home-navbar-center">
          <a href="/howto" className="home-navbar-tutorial">
          How To
          </a>
        </div>
        <div className="home-navbar-right">
            <a href="/contact" className="home-contact-link">
            Developer
            </a>
        </div>
    </nav>
  );
}