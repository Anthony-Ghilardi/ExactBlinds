import React from "react";
import { useNavigate } from "react-router-dom";
import FauxWoodBlindsImage from "../../images/fauxwoodblinds.png";
import CellularShadeImage from "../../images/cellularshadeimageedited.png"
import "./blind-container.css";

export default function BlindContainer() {
  const navigate = useNavigate();

  return (
    <div className="blind-container-container">
      <div className="faux-wood-cotainer">
        <button className="faux-wood-button">
          <img
            className="faux-wood-image"
            src={FauxWoodBlindsImage}
            alt="Closed shutter designed by Freepik"
            onClick={() => {
              console.log("redirecting...");
              navigate("/fauxWood");
            }}
          />
          <p>Photo Desgined by Freepik</p>
        </button>
        <h1>Faux Wood</h1>
      </div>
      <div className="cellular-container">
        <button className="cellular-button">
          <img
            className="cellular-shade-image"
            src={CellularShadeImage}
            alt="Window Roller Shutters Set designed by Freepik"
          onClick={() => {
            console.log("redirecting...");
            navigate("/cellular");
          }}
          />
          <p>Photo designed by Freepik</p>
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
