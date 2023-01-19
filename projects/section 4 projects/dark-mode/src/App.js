import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
