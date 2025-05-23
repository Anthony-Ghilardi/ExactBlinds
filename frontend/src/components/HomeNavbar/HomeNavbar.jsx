import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home-navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";
import { AuthContext } from "../../AuthProvider";

export default function HomeNavbar() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

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
        {location.pathname !== "/account" && !user && (
          <Link to="/login" className="home-navbar-link">
            Login
          </Link>
        )}
        {location.pathname !== "/account" && user && (
          <Link to="/account" className="home-navbar-link">
            Account
          </Link>
        )}
      </div>
    </nav>
  );
}
