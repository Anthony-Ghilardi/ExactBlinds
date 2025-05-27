import React from "react";
import './show-room-card.css'

export default function ShowRoomCard({ id, name, onView, onDelete }) {
    return (
        <div className="showroom-card-container">
            <h1 className="showroom-card-header">{name}</h1>
            <button className="showroom-card-view-btn" onClick={() => onView(id)}>View Design</button>
            <button className="showroom-card-delete-btn" onClick={() => onDelete(id)}>Delete Design</button>
        </div>
    )
}