import React from "react";
import { user } from "../join/Join";
import socketIo from "socket.io-client";
import { useEffect } from "react";

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const socket = socketIo(ENDPOINT, {
    transports: ["websocket"],
  });
  useEffect(() => {
    socket.on("connect", () => {
      alert("Connected");
    });
    return () => {};
  }, [socket]);
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>
        <div className="inputBox"></div>
      </div>
      <h1>{user}</h1>
    </div>
  );
};

export default Chat;
