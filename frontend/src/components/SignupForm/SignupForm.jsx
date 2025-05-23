import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "./signup-form.css";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

export default function SignupForm() {
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  async function submitNewUser(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        createEmail,
        createPassword
      );
      const { uid, email } = userCredential.user;

      const response = await fetch("http://localhost:8000/api/blinds/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, email }),
      });

      if (!response.ok) {
        throw new Error("Failed to save user to database");
      }
      toast.success("Account created successfully!", {
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
    } catch (error) {
      console.error("Signup Error:", error.message);
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
    }
  }

  return (
    <div className="signup-form-container">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <form onSubmit={submitNewUser} className="signup-form">
        <label className="signup-form-header">Create Account</label>
        <input
          className="signup-email-input"
          name="emailInput"
          type="email"
          placeholder="Enter your email"
          value={createEmail}
          onChange={(e) => setCreateEmail(e.target.value)}
        />
        <input
          className="signup-password-input"
          name="passwordInput"
          type="password"
          placeholder="Enter your password"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
        />
        <button className="signup-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
