import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./account-home.css";
import { AuthContext } from "../../AuthProvider";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export default function AccountHome() {
  const { user, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
    toast.success("Logged out successfully", {
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

  function showroomNavigate() {
    navigate("/showroom");
  }

  return loading ? (
    <div className="loader-wrapper">
      <span className="loader"></span>
    </div>
  ) : (
    <div>
      <HomeNavbar />
      <div className="user-info-container">
        <h1 className="user-info-header">Account Information</h1>
        <h2 className="user-info-text">Email: {user.email}</h2>
        <button className="user-info-btn" onClick={showroomNavigate}>Show Room</button>
        <button onClick={handleLogout} className="user-info-btn">
          Log Out
        </button>
      </div>
    </div>
  );
}
