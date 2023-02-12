import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Submenu from "./components/Submenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}

export default App;
