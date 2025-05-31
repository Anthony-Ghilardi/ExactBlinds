import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import BlindCard from "../BlindCard/BlindCard";
import DesignerBlock from "../DesignerBlock/DesignerBlock";
import "./designer.css";
import { AuthContext } from "../../AuthProvider";
import { useDesignContext } from "../../DesignContext/DesignContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useNavigate } from "react-router-dom";
const API_BASE = process.env.REACT_APP_API_BASE;

export default function Designer() {
  const [blindArray, setBlindArray] = useState([]);
  const [savedBlinds, setSavedBlinds] = useState([]);
  const [designName, setDesignName] = useState("");
  const { token,user } = useContext(AuthContext);
  const { designs } = useDesignContext();
  const navigate = useNavigate();

  useEffect(() => {}, [blindArray]);

  useEffect(() => {}, [savedBlinds]);

  useEffect(() => {
    if (designs.length > 0) {
      const formatted = designs.map((card) => {
        return {
          id: card.id,
          name: card.name,
          width: card.width,
          height: card.height,
          mountType: card.mount_type,
          user_uid: card.user_uid,
          design_project_id: card.design_project_id,
        };
      });
      setBlindArray(formatted);
    }
  }, [designs]);

  if(!user) return <DesignerBlock />

  const handleNameInput = (e) => {
    setDesignName(e.target.value);
  };

  function createCard() {
    const newCard = {
      id: uuidv4(),
      name: "",
      mountType: "",
      width: "",
      height: "",
      user_uid: user.uid,
    };
    setBlindArray([...blindArray, newCard]);
  }

  function removeCard(id) {
    setBlindArray(blindArray.filter((a) => a.id !== id));
  }

  function updateCard(id, updatedFields) {
    const updateArray = blindArray.map((card) =>
      card.id === id ? { ...card, ...updatedFields } : card
    );
    setBlindArray(updateArray);
  }

  async function onFieldUpdate(id, updatedFields) {
    const current = blindArray.find((card) => card.id === id);
    if (!current) return;

    const updatedBlind = { ...current, ...updatedFields };

    updateCard(id, updatedFields);

    try {
      const res = await fetch(`${API_BASE}/api/blinds/updateDesign`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedBlind),
      });

      if (!res.ok) throw new Error("Failed to update design");

    } catch (error) {
      console.error("Update failed:", error.message);
      toast.error("Failed to save changes", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  }

  async function onSaveAll() {
    const isValid = (card) =>
      card.name === "" ||
      card.mountType === "" ||
      card.width === "" ||
      card.height === "" ||
      card.name.trim() === "" ||
      isNaN(Number(card.width)) ||
      isNaN(Number(card.height));

    if (!designName.trim()) {
      toast.warn("Please enter a design name", {
        toastId: "design-name-missing",
        position: "bottom-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (blindArray.some(isValid)) {
      toast.warn("Please enter all measurements", {
        toastId: "fauxwood-invalid",
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
    }

    const projectRes = await fetch(
      `${API_BASE}/api/blinds/projects`,
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name: designName, user_uid: user.uid }),
      }
    );

    const { id: design_project_id } = await projectRes.json();

    try {
      for (let card of blindArray) {
        await fetch(`${API_BASE}/api/blinds/designer`, {
          method: "POST",
          headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
          body: JSON.stringify({ ...card, design_project_id }),
        });
      }
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
    } catch (error) {
      console.error(error.message);
    }
  }

  function backButton() {
    navigate("/showroom")
  }

  return (
    <div>
      <Navbar />
      <div>
        <button className="designer-back-btn" onClick={backButton}>Back to showroom</button>
      </div>
      <div className="save-btn-container">
        <Tippy content={<span>Saves your entire design project to your account.</span>} delay={200}>
          <div>
            <button
              className="save-all-btn"
              onClick={onSaveAll}
              disabled={blindArray.length === 0 || !designName.trim()}
              type="button"
            >
              Finalize Design
            </button>
          </div>
        </Tippy>
        <div className="design-name-container">
          <input
            className="design-name-input"
            type="text"
            value={designName}
            onChange={handleNameInput}
            placeholder="Name your design"
          />
        </div>
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
            onFieldUpdate={onFieldUpdate}
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
