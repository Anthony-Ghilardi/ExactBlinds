import React, { useState } from "react";
import "./signup-form.css";
import { auth } from "../../firebase/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupForm() {
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  function sumbitNewUser(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, createEmail, createPassword)
      .then((userCredential) => {
        //Signed up
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={sumbitNewUser} className="signup-form">
        <label className="signup-form-header">Create Account</label>
        <input
        className="signup-email-input" 
        name="emailInput" 
        type="email" 
        placeholder="Enter your email"
        value={createEmail}
        onChange={e => setCreateEmail(e.target.value)}
        />
        <input 
        className="signup-password-input" 
        name="passwordInput" 
        type="password" 
        placeholder="Enter your password"
        value={createPassword}
        onChange={e => setCreatePassword(e.target.value)}
        />
        <button className="signup-submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
