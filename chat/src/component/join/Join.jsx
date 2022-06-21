import React from "react";
import "./Join.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
let user;

const Join = () => {
  const [name, setName] = useState("");
  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <h1>Chat Box</h1>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          id="joinInput"
          placeholder="Enter your Name"
        />
        <NavLink
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
          style={{ textDecoration: "none" }}
        >
          <button onClick={sendUser} className="joinBtn">
            Login
          </button>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Join;
export { user };
