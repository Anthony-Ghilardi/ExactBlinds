import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import "./home-nav-burger.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";

export default function HomeNavBurger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <div className="home-burger-container">
        <button className="burger-toggle-btn" onClick={toggleHamburger}>
          <div className="burger-items"></div>
          <div className="burger-items"></div>
          <div className="burger-items"></div>
        </button>
      </div>
      <div>
        <div className={`burger-menu ${hamburgerOpen ? "open" : ""}`}>
          <div className="burger-links-container">
            <div>
              <Link to="/" className="home-navbar-logo">
                <img
                  className="burger-logo"
                  src={logo}
                  alt="Exact Blinds Logo"
                />
              </Link>
            </div>
            <div>
              <button className="burger-close-btn" onClick={toggleHamburger}>
                <div className="burger-items-close-one"></div>
                <div className="burger-items-close-two"></div>
              </button>
            </div>
            <div>
              <Link to="/howto" className="burger-links">
                How To
              </Link>
            </div>
            <div>
              <Link to="/designer" className="burger-links">
                Designer
              </Link>
            </div>
            <div>
              {location.pathname !== "/account" && !user && (
                <Link to="/login" className="burger-links">
                  Login
                </Link>
              )}
              {location.pathname !== "/account" && user && (
                <Link to="/account" className="burger-links">
                  Account
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
