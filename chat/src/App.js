import socketIO from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Join from "./component/join/Join";
import Chat from "./component/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
