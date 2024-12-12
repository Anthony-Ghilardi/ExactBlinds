import React, { useState } from "react";
import "./faux-wood.css";
import TapeMeasure from "../../TapeMeasure/TapeMeasure";

export default function FauxWood() {
  const [OriginalValue, setOriginalValue] = useState("");
  const [DesiredValue, setDesiredValue] = useState("");
  const [Cut, setCut] = useState("");
  const [IsHidden, setIsHidden] = useState(false);
  const [HideResult, setHideResult] = useState(false);

  const handleOriginalInput = (event) => {
    const OriginalValue = event.target.value;
    const regex = /^\s*(\d+)?(\s+(\d+\/?\d*)?)?$/;

    if (regex.test(OriginalValue) || OriginalValue === "") {
      setOriginalValue(OriginalValue);
    }
  };

  const handleDesiredInput = (event) => {
    const DesiredValue = event.target.value;
    const regex = /^\s*(\d+)?(\s+(\d+\/?\d*)?)?$/;

    if (regex.test(DesiredValue) || DesiredValue === "") {
      setDesiredValue(DesiredValue);
    }
  };

  function fractionToDecimal(input) {
    if (!input) return NaN;

    let [whole, fraction] = input.trim().split(" ");
    let result = parseInt(whole) || 0;

    if (fraction && fraction.includes("/")) {
      let [numerator, denominator] = fraction.split("/");
      if (denominator) {
        result += parseInt(numerator) / parseInt(denominator);
      }
    }

    return result;
  }

  const handleCut = (event) => {
    event.preventDefault();
    let blindWidth = fractionToDecimal(OriginalValue);
    let blindCut = fractionToDecimal(DesiredValue);
    let subtraction = blindWidth - blindCut;
    let Cut = subtraction / 2;
    setCut(Cut);
    setHideResult(true);
    console.log(Cut);
    console.log(blindWidth);
    console.log(blindCut);
  };

  const toggleHiddenElement = () => {
    setIsHidden(!IsHidden);
  };

  return (
    <div>
      <h1 className="faux-wood-header">Faux Wood Blinds</h1>
      <h2 className="measurement-header">Please enter your measurements</h2>
      <form className="faux-wood-form" onSubmit={handleCut}>
        <fieldset>
          <label className="faux-input-one">
            Enter the width of your current blind
            <input
              type="text"
              value={OriginalValue}
              onChange={handleOriginalInput}
              placeholder="Example: 30 1/2"
            />
          </label>
          <label className="faux-input-two">
            Enter the desired width of your blind
            <input
              type="test"
              value={DesiredValue}
              onChange={handleDesiredInput}
              placeholder="Example: 28 1/2"
            />
          </label>
          <input type="submit" value="Submit" className="faux-submit-button" />
        </fieldset>
      </form>
      {HideResult && (
        <div className="cut-showcase">
          <h2>Your blind needs to be cut by {Cut} inch on both sides</h2>
        </div>
      )}
      <div className="tape-measure-button">
        <button onClick={toggleHiddenElement}>
          {IsHidden ? "Hide tape measure" : "Show tape measure"}
        </button>
        {IsHidden && <TapeMeasure />}
      </div>
    </div>
  );
}
