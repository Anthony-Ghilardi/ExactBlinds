import React, { useState } from "react";
import "./faux-wood.css";

export default function FauxWood() {
  const [OriginalValue, setOriginalValue] = useState("");
  const [DesiredValue, setDesiredValue] = useState("");
  const [Cut, setCut] = useState("");

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

  const handleCut = (event) => {
    event.preventDefault();
    let blindWidth = OriginalValue;
    let blindCut = DesiredValue;
    console.log(blindWidth);
    console.log(blindCut);
    // setCut();
    // console.log()
  };

  return (
    <div>
      <h1>Faux Wood Blinds</h1>
      <h2>Please enter your measurements</h2>
      <form onSubmit={handleCut}>
        <fieldset>
          <label>
            Enter the width of your current blind
            <input
              type="text"
              value={OriginalValue}
              onChange={handleOriginalInput}
              placeholder="Example: 30 1/2"
            />
          </label>
          <label>
            Enter the desired width of your blind
            <input
              type="test"
              value={DesiredValue}
              onChange={handleDesiredInput}
              placeholder="Example: 28 1/2"
            />
          </label>
          <input 
            type="submit"
            value="Submit"
          />
        </fieldset>
      </form>
      <div className="cut-showcase">
        <h2>Display Output here</h2>
      </div>
      <div>
        Add hidden tape measure picture to help people who cant read one
      </div>
    </div>
  );
}