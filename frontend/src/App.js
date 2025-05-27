import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FauxWood from "./components/FauxWood/FauxWood";
import Vinyl from "./components/Vinyl/Vinyl";
import Cellular from "./components/Cellular/Cellular";
import Tutorial from "./components/Tutorial/Tutorial";
import Designer from "./components/Designer/Designer";
import SignupPage from "./components/Signup-page/SignupPage";
import LoginSplashPage from "./LoginSplashPage/LoginSplashPage";
import AccountHome from "./components/AccountHome/AccountHome";
import AuthProvider from "./AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import ShowRoom from "./components/ShowRoom/ShowRoom";
import { DesignProvider } from "./DesignContext/DesignContext";

function App() {
  return (
    <AuthProvider>
      <DesignProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fauxWood" element={<FauxWood />} />
            <Route path="/cellular" element={<Cellular />} />
            <Route path="/vinyl" element={<Vinyl />} />
            <Route path="/howto" element={<Tutorial />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginSplashPage />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/showroom"
              element={
                <ProtectedRoute>
                  <ShowRoom />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </DesignProvider>
    </AuthProvider>
  );
}

export default App;
