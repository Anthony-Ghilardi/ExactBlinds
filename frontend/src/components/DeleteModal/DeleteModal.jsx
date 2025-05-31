import React from "react";
import "./delete-modal.css";

export default function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal-content">
        <h1>Are you sure you want to permanently delete this design?</h1>
        <div className="delete-modal-buttons">
          <button className="confirm-delete-btn" onClick={onConfirm}>Delete</button>
          <button className="cancel-delete-btn" onClick={onCancel}>Go back</button>
        </div>
      </div>
    </div>
  );
}