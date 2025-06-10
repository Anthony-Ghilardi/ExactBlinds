import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav-burger.css";
import logo from "../../images/ExactBlindsLogoTransparent.jpg";
import { AuthContext } from "../../AuthProvider";

export default function Navburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <div className="nav-burger-container">
        <button className="nav-burger-toggle" onClick={toggleHamburger}>
          <div className="nav-burger-items"></div>
          <div className="nav-burger-items"></div>
          <div className="nav-burger-items"></div>
        </button>
      </div>
      <div>
        <div className={`nav-burger-menu ${hamburgerOpen ? "open" : ""}`}>
          <div className="nav-burger-links-container">
            <div>
              <Link to="/" className="home-navbar-logo">
                <img
                  className="nav-burger-logo"
                  src={logo}
                  alt="Exact Blinds Logo"
                ></img>
              </Link>
            </div>
            <div>
              <button
                className="nav-burger-close-btn"
                onClick={toggleHamburger}
              >
                <div className="nav-burger-items-close-one"></div>
                <div className="nav-burger-items-close-two"></div>
              </button>
            </div>

            <div>
              <Link to="/fauxWood" className="nav-burger-links">
                Faux Wood
              </Link>
            </div>
            <div>
              <Link to="/cellular" className="nav-burger-links">
                Cellular Shades
              </Link>
            </div>
            <div>
              <Link to="/vinyl" className="nav-burger-links">
                Vinyl
              </Link>
            </div>
            <div>
              {!user &&
                location.pathname !== "/login" &&
                location.pathname !== "/signup" && (
                  <Link to="/login" className="nav-burger-links">
                    Login
                  </Link>
                )}
              {user && location.pathname !== "/account" && user && (
                <Link to="/account" className="nav-burger-links">
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
