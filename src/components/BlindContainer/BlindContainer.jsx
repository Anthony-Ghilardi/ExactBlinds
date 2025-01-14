import React from "react";
import { useNavigate } from "react-router-dom";
import FauxWoodBlindsImage from "../../images/fauxwoodblinds.png";
import CellularShadeImage from "../../images/cellularshadeimageedited.png";
import VinylBlindsImage from "../../images/VinylBlinds.jpg";
import "./blind-container.css";

export default function BlindContainer() {
  const navigate = useNavigate();

  return (
    <div className="blind-container-container">
      <div className="blind-container-faux-wood">
        <h1>Faux Wood</h1>
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
      </div>
      <div className="blind-container-cellular">
        <h1>Cellular Shade</h1>
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
      </div>
      <div className="blind-container-vinyl">
        <h1>Vinyl</h1>
        <button className="vinyl-button">
          <img
            className="vinyl-blind-image"
            src={VinylBlindsImage}
            alt="Office desk still life designed by Freepik"
            onClick={() => {
              console.log("redirecting...");
              navigate("/vinyl");
            }}
          />
          <p>Photo designed by Freepik</p>
        </button>
      </div>
    </div>
  );
}
