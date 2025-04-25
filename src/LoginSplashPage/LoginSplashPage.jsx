import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-splash-page.css";
import Navbar from "../components/Navbar/Navbar";

export default function LoginSplashPage() {
  return (
    <div>
      <Navbar />
      <div className="login-form-container">
        {/* correct line 11 <form onSubmit={sumbitNewUser} className="signup-form"> */}
        <form className="login-form">
          <label className="login-form-header">Login</label>
          <input
            className="login-email-input"
            name="emailInput"
            type="email"
            placeholder="Enter your email"
            // add value like value={createEmail}
            // add on change like onChange={(e) => setCreateEmail(e.target.value)}
          />
          <input
            className="login-password-input"
            name="passwordInput"
            type="password"
            placeholder="Enter your password"
            // add value like value={createPassword}
            // add on change like onChange={(e) => setCreatePassword(e.target.value)}
          />
          <button className="login-submit-btn" type="submit">
            Log in
          </button>
          <Link to="/signup" className="signup-splash-link">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
