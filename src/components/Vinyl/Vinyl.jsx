import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "./vinyl.css";
import TapeMeasure from "../../TapeMeasure/TapeMeasure";
import Navbar from "../Navbar/Navbar";

export default function Vinyl() {
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
    if (OriginalValue === "" || DesiredValue === "") {
      toast.warn("Please enter blind measurements", {
        position: "bottom-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setCut("");
      setHideResult(false);
      return;
    }
    let blindWidth = fractionToDecimal(OriginalValue);
    let blindCut = fractionToDecimal(DesiredValue);
    let subtraction = blindWidth - blindCut;
    let Cut = subtraction / 2;

    if (Cut <= 0) {
      toast.warn(
        "This measurement is negative or zero please enter a different size.",
        {
          position: "bottom-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      setCut("");
      setHideResult(false);
      return;
    }

    if (Cut <= 1 / 4) {
      toast.warn(
        "This cut may be too short consider using a larger blind to achieve the desired size",
        {
          position: "bottom-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }

    if (Cut >= 5) {
      toast.warn(
        "This cut may be too large consider using a larger blind to achieve the desired size",
        {
          position: "bottom-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
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
      <Navbar />
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h1 className="faux-wood-header">Vinyl Blinds</h1>
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
              type="text"
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
