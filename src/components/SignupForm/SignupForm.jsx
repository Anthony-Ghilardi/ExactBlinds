import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "./signup-form.css";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const navigate = useNavigate();

  function sumbitNewUser(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, createEmail, createPassword)
      .then((userCredential) => {
        //Signed up
        const user = userCredential.user;
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
          setTimeout(() => {
            navigate("/account");
          }, 2000);
      })
      .catch((error) => {
        toast.error('Unable to create account', {
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
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
      <form onSubmit={sumbitNewUser} className="signup-form">
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
