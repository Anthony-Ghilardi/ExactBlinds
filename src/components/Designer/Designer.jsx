import React from "react";
import Navbar from "../Navbar/Navbar";
import BlindCard from "../BlindCard/BlindCard";
import "./designer.css";

export default function Designer() {

  return (
    <div>
      <Navbar />
      <BlindCard />
      <div>
        <button className="create-card-button">
          Add window
        </button>
      </div>
      <div className="card-container"></div>
    </div>
  );
}