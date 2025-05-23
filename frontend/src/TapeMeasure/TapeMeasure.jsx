import React from "react";
import tapeMeasureImage from "../images/TapeMeasure.jpg";
import "./tape-measure.css";

export default function TapeMeasure() {
  return (
      <div className="tape-measure-container">
        <img
          className="tape-measure-image"
          src={tapeMeasureImage}
          alt="Tape Measure"
          draggable="false"
        ></img>
      </div>
  );
}
