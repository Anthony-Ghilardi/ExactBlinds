import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import BlindCard from "../BlindCard/BlindCard";
import "./designer.css";

export default function Designer() {
  const [blindArray, setBlindArray] = useState([]);
  const [savedBlinds, setSavedBlinds] = useState([]);

  useEffect(() => {
    console.log("Updated blindArray:", blindArray);
  }, [blindArray]);

  useEffect(() => {
    console.log("Final saved design:", savedBlinds);
  }, [savedBlinds]);

  function createCard() {
    const newCard = {
      id: uuidv4(),
      name: "",
      mountType: "",
      width: "",
      height: "",
    };
    console.log("Created card with ID:", newCard.id);
    console.log("Created card with name:", newCard.name);
    console.log("Created card with mount type:", newCard.mountType);
    console.log("Created card with width:", newCard.width);
    console.log("Created card with height:", newCard.height);
    setBlindArray([...blindArray, newCard]);
  }

  function removeCard(id) {
    setBlindArray(blindArray.filter((a) => a.id !== id));
  }

  function updateCard(id, updatedFields) {
    const updateArray = blindArray.map((card) => {
      if (card.id === id) {
        return { ...card, ...updatedFields };
      } else {
        return card;
      }
    });
    setBlindArray(updateArray);
  }

  function onSaveAll() {
    const isValid = (card) =>
      card.name === "" ||
      card.mountType === "" ||
      card.width === "" ||
      card.height === "" ||
      card.name.trim() === "" ||
      isNaN(Number(card.width)) || isNaN(Number(card.height));
    if (blindArray.some(isValid)) {
      toast.warn("Please enter all measurements", {
        toastId: "fauxwood invalid",
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
      return;
    } else {
      toast.success("All measurements saved!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setSavedBlinds(blindArray);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="save-btn-container">
        <button
          className="save-all-btn"
          onClick={onSaveAll}
          disabled={blindArray.length === 0}
          type="button"
        >
          Save Design
        </button>
      </div>
      <div className="card-container">
        {blindArray.map((blindArray) => (
          <BlindCard
            key={blindArray.id}
            id={blindArray.id}
            name={blindArray.name}
            mountType={blindArray.mountType}
            width={blindArray.width}
            height={blindArray.height}
            removeCard={removeCard}
            updateCard={updateCard}
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
