import React, { useState, useContext, useEffect } from "react";
import { useDesignContext } from "../../DesignContext/DesignContext";
import "./show-room.css";
import { AuthContext } from "../../AuthProvider";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import { useNavigate } from "react-router-dom";
import ShowRoomCard from "../ShowRoomCard/ShowRoomCard";

export default function ShowRoom() {
  const { user, loading } = useContext(AuthContext);
  const [userDesign, setUserDesign] = useState([]);
  const [userDesignArray, setUserDesignArray] = useState([]);
  const { setDesigns } = useDesignContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Current UID:", user?.uid);
    fetch(`http://localhost:8000/api/blinds/showroom?uid=${user?.uid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load user designs: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserDesign(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.uid]);

  async function sendUserDesign(id) {
    const projectRes = await fetch(
      "http://localhost:8000/api/blinds/loadProject",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      }
    );
    const response = await projectRes.json();
    setUserDesignArray(response);
    setDesigns(response);
    navigate("/designer");
  }

  async function deleteDesign(id) {
    const projectRes = await fetch(
      "http://localhost:8000/api/blinds/deleteDesign",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      }
    );
    fetch(`http://localhost:8000/api/blinds/showroom?uid=${user?.uid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load user designs: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserDesign(data);
        console.log(data);
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
              onDelete={() => deleteDesign(id)}
            />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
