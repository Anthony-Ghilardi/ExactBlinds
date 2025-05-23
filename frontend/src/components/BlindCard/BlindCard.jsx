import React from "react";
import "./blind-card.css";
import BlindCardWindow from "../../images/BlindCardWindow.jpg";

export default function BlindCard({ id, name, mountType, width, height, updateCard, removeCard }) {

  const handleWidthInputChange = (e) => {
    const width = e.target.value;
    const regex = /^\s*(\d+)?(\s+(\d+\/?\d*)?)?$/;

    if (regex.test(width) || width === "") {
      updateCard(id, { width });
    }
  };

  const handleHeightInputChange = (e) => {
    const height = e.target.value;
    const regex = /^\s*(\d+)?(\s+(\d+\/?\d*)?)?$/;

    if (regex.test(height) || height === "") {
      updateCard(id, { height });
    }
  };

  const handleNameInput = (e) => {
    const name = e.target.value;
    updateCard(id, { name });
  };

  const handleDropdownInput = (e) => {
    const mountType = e.target.value;
    updateCard(id, { mountType });
  };

  const handleBlindSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blind-card-container">
      <h1 className="blind-card-header">Enter your measurements</h1>
      <form className="blind-card-form" onSubmit={handleBlindSubmit}>
        <div className="card-name-container">
          <input
            className="card-name-input"
            type="text"
            value={name}
            onChange={handleNameInput}
            placeholder="Name you blind"
          />
          <select className="dropdown-card-select" value={mountType} onChange={handleDropdownInput}>
            <option value="">-- Select Mount Type --</option>
            <option value="inside">Inside Mount</option>
            <option value="outside">Outside Mount</option>
            <option value="exact">Exact size</option>
          </select>
        </div>
        <div className="card-width-container">
          <input
            className="card-width-input"
            type="text"
            value={width}
            onChange={handleWidthInputChange}
            placeholder="Width"
          />
        </div>
        <div className="blind-image-container">
          <input
            className="card-height-input"
            type="text"
            value={height}
            onChange={handleHeightInputChange}
            placeholder="Height"
          />
          <img
            className="blind-card-image"
            src={BlindCardWindow}
            alt="Window for size reference"
          />
        </div>
        <div className="card-btn-container">
          <button
            className="card-remove-btn"
            onClick={() => removeCard(id)}
            type="button"
          >
            Remove
          </button>
        </div>
      </form>
    </div>
  );
}
