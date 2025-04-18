import React, { useState } from "react";
import "./blind-card.css";
import BlindCardWindow from "../../images/BlindCardWindow.jpg";

export default function BlindCard() {
  const [widthValue, setWidthValue] = useState("");
  const [heightValue, setHeightValue] = useState("");

  const handleWidthInputChange = (e) => {
    const WidthValue = e.target.value;
    const regex = /^\s*(\d+)?(\s+(\d+\/?\d*)?)?$/;

    if(regex.test(WidthValue) || WidthValue === "") {
        setWidthValue(WidthValue)
    }
  };

  const handleHeightInputChange = (e) => {
    const HeightValue = e.target.value;
    const regex = /^\s*(\d+)?(\s+(\d+\/?\d*)?)?$/;
    
    if(regex.test(HeightValue) || HeightValue === "") {
        setHeightValue(HeightValue)
    }
  };

  return (
    <div className="blind-card-container">
      <h1 className="blind-card-header">Enter your measurements</h1>
      <div className="card-width-container">
        <input
          className="card-width-input"
          type="text"
          value={widthValue}
          onChange={handleWidthInputChange}
          placeholder="Width"
        />
      </div>
      <div className="card-height-container">
        <input
          className="card-height-input"
          type="text"
          value={heightValue}
          onChange={handleHeightInputChange}
          placeholder="Height"
        />
        <img
          className="blind-card-image"
          src={BlindCardWindow}
          alt="Window for size reference"
        />
      </div>
    </div>
  );
}
