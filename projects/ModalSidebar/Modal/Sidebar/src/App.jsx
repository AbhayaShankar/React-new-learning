import React, { useState } from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
}

export default App;
