import React, { useState, useContext, useEffect } from "react";
import { useDesignContext } from "../../DesignContext/DesignContext";
import "./show-room.css";
import { AuthContext } from "../../AuthProvider";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { useNavigate } from "react-router-dom";
import ShowRoomCard from "../ShowRoomCard/ShowRoomCard";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function ShowRoom() {
  const { token, user, loading } = useContext(AuthContext);
  const [userDesign, setUserDesign] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDesignId, setSelectedDesignId] = useState();
  const { setDesigns } = useDesignContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user?.uid) return;

    fetch(`${process.env.REACT_APP_API_BASE}/api/blinds/showroom?uid=${user?.uid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load user designs: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserDesign(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.uid, token]);

  function onRequestDelete(id) {
    setSelectedDesignId(id);
    setShowDeleteModal(true);
  }

  async function sendUserDesign(id) {
    const projectRes = await fetch(
      `${process.env.REACT_APP_API_BASE}/api/blinds/loadProject`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: id }),
      }
    );
    const response = await projectRes.json();
    setDesigns(response);
    navigate("/designer");
  }

  async function deleteDesign(id) {
    await fetch(`${process.env.REACT_APP_API_BASE}/api/blinds/deleteDesign`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id }),
    });
    fetch(`${process.env.REACT_APP_API_BASE}/api/blinds/showroom?uid=${user?.uid}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load user designs: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserDesign(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return loading ? (
    <div className="loader-wrapper">
      <span className="loader"></span>
    </div>
  ) : (
    <div>
      <HomeNavbar />
      <div className="showroom-header-container">
        <h1 className="showroom-header">Welcome to your Show Room!</h1>
        <div className="showroom-btn-container">
          {userDesign.map(({ name, id }, index) => (
            <ShowRoomCard
              key={id}
              id={id}
              name={name}
              onView={() => sendUserDesign(id)}
              onDelete={() => onRequestDelete(id)}
            />
          ))}
        </div>
        {showDeleteModal && (
          <DeleteModal
            onConfirm={() => {
              deleteDesign(selectedDesignId);
              setShowDeleteModal(false);
            }}
            onCancel={() => setShowDeleteModal(false)}
          />
        )}
      </div>
      <div></div>
    </div>
  );
}
