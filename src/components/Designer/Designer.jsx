import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import BlindCard from "../BlindCard/BlindCard";
import "./designer.css";

export default function Designer() {
  const [blindArray, setBlindArray] = useState([]);

  function createCard() {
    const newCard = { id: uuidv4(), height: "", width: "" };
    console.log("Created card with ID:", newCard.id);
    setBlindArray([...blindArray, newCard]);
  }

  function removeCard(id) {
    setBlindArray(blindArray.filter((a) => a.id !== id));
  }

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {blindArray.map((blindArray) => (
          <BlindCard
            key={blindArray.id}
            id={blindArray.id}
            removeCard={removeCard}
          />
        ))}
      </div>
      <div className="create-card-btn-container">
        <button onClick={createCard} className="create-card-button">
          Add window
        </button>
      </div>
    </div>
  );
}
