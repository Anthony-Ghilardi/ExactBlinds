import React from "react";
import SignupForm from "../SignupForm/SignupForm";
import "./signup-page.css"
import Navbar from "../Navbar/Navbar";

export default function SignupPage() {

    return(
        <div className="login-container">
            <Navbar />
            <SignupForm />
        </div>
    )
}