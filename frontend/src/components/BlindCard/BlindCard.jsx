import React from "react";
import "./blind-card.css";
import BlindCardWindow from "../../images/BlindCardWindow.jpg";
import { toast } from "react-toastify";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function BlindCard({
  id,
  name,
  mountType,
  width,
  height,
  updateCard,
  removeCard,
  onFieldUpdate,
}) {
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

  const isCardValid =
    name.trim() !== "" &&
    mountType !== "" &&
    width.trim() !== "" &&
    height.trim() !== "" &&
    !isNaN(Number(width)) &&
    !isNaN(Number(height));

  const handleBlindSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      mountType === "" ||
      width.trim() === "" ||
      height.trim() === "" ||
      isNaN(Number(width)) ||
      isNaN(Number(height))
    ) {
      toast.warn("Please fill all fields", {
        position: "bottom-center",
        autoClose: 3000,
      });
      return;
    } else {
      onFieldUpdate(id, { name, mountType, width, height });
      toast.success("Measurements saved", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
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
          <select
            className="dropdown-card-select"
            value={mountType}
            onChange={handleDropdownInput}
          >
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
          <Tippy content={<span>Saves only this blind's measurements — don't forget to finalize your full design.</span>} delay={200}>
            <div>
              <button
                className="card-save-btn"
                type="submit"
                disabled={!isCardValid}
              >
                Save Card
              </button>
            </div>
          </Tippy>
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
