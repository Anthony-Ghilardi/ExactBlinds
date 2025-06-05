import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";
import { AuthContext } from "../../AuthProvider";

export default function Navbar() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

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
        <div className="navbar-links">
          <Link to="/fauxWood" className="navbar-link-text">Faux Wood</Link>
          <Link to="/cellular" className="navbar-link-text">Cellular Shades</Link>
          <Link to="/vinyl" className="navbar-link-text">Vinyl</Link>
        </div>
      </div>
      <div className="navbar-right">
        {!user &&
          location.pathname !== "/login" &&
          location.pathname !== "/signup" && (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        {user && location.pathname !== "/account" && user && (
          <Link to="/account" className="home-navbar-link">
            Account
          </Link>
        )}
      </div>
    </nav>
  );
}
