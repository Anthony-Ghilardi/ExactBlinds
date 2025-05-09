import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  } else if (!user) {
    toast.warn("Please login", {
      toastId: "unauthorized-access",
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
