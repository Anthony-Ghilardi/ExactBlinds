import React from "react";
import "./designer-block.css";
import Navbar from "../Navbar/Navbar";

export default function DesignerBlock() {
  return (
    <div className="designer-block-container">
      <Navbar />
      <h1 className="designer-block-header">
        Please create an account or login to access this feature
      </h1>
      <div className="designer-block-text-container">
        <p className="designer-block-text">
          The Designer page allows you to create and save multiple custom window
          measurements directly to your account, making them accessible from any
          device at any time. You can specify key details such as mount type,
          height, and width, and give each design a unique name to easily
          organize and identify your projects.
        </p>
      </div>
    </div>
  );
}
