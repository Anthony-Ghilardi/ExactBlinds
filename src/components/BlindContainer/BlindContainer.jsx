import React from "react";
import { useNavigate } from "react-router-dom";
import "./blind-container.css";

export default function BlindContainer() {
  const navigate = useNavigate();

  return (
    <div className="blind-container-container">
      <div className="faux-wood-cotainer">
        <button
          className="faux-wood-button"
          onClick={() => {
            console.log("redirecting...");
            navigate("/fauxWood");
          }}
        >
          Navigate to Faux Wood Page
        </button>
        <h1>Faux Wood</h1>
      </div>
      <div className="cellular-container">
        <button
          className="cellular-button"
          onClick={() => {
            console.log("redirecting...");
            navigate("/cellular");
          }}
        >
          Navigate to Cellular Shade Page
        </button>
        <h1>Cellular Shade</h1>
      </div>
      <div className="vinyl-container">
        <button
          className="vinyl-button"
          onClick={() => {
            console.log("redirecting...");
            navigate("/vinyl");
          }}
        >
          Navigate to Vinyl Page
        </button>
        <h1>Vinyl</h1>
      </div>
    </div>
  );
}
