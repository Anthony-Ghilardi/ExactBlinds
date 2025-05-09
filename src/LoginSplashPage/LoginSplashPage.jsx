import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "./login-splash-page.css";
import Navbar from "../components/Navbar/Navbar";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginSplashPage() {
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [loggedInPassword, setLoggedInPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const isLoggingInRef = useRef(false);
  const navigate = useNavigate();

  function logInUser(e) {
    e.preventDefault();
    if (isLoggingInRef.current) return;
    isLoggingInRef.current = true;
    setIsLoggingIn(true);
    signInWithEmailAndPassword(auth, loggedInEmail, loggedInPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Logged in successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        isLoggingInRef.current = false;
        setIsLoggingIn(false);
          navigate("/account");
      })
      .catch((error) => {
        toast.error("Unable to create account", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        isLoggingInRef.current = false;
        setIsLoggingIn(false);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <Navbar />
      <div className="login-form-container">
        <form onSubmit={logInUser} className="login-form">
          <label className="login-form-header">Login</label>
          <input
            className="login-email-input"
            name="emailInput"
            type="email"
            placeholder="Enter your email"
            value={loggedInEmail}
            onChange={(e) => setLoggedInEmail(e.target.value)}
          />
          <input
            className="login-password-input"
            name="passwordInput"
            type="password"
            placeholder="Enter your password"
            value={loggedInPassword}
            onChange={(e) => setLoggedInPassword(e.target.value)}
          />
          <button
            className="login-submit-btn"
            type="submit"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging in..." : "Log in"}
          </button>
          <Link to="/signup" className="signup-splash-link">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
