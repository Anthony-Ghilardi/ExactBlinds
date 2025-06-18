import React from "react";
import tapeMeasureImage from "../images/TapeMeasure.jpg";
import "./tape-measure.css";
import { motion } from "motion/react"

export default function TapeMeasure({ constraintsRef }) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.2}
      initial={{ x: 10, y: 450 }}
      style={{ position: "absolute", zIndex: 1200, width: 470, boxSizing:"border-box" }}
    >
      <div className="tape-measure-container">
        <img
          className="tape-measure-image"
          src={tapeMeasureImage}
          alt="Tape Measure"
          draggable="false"
        />
      </div>
    </motion.div>
  );
}
