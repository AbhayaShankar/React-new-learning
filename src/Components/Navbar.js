import React from "react";
import logo from "./logo.png";
import "../index.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="left-nav">
        <img className="logo" src={logo} alt="react-logo" />
        <h3>React</h3>
      </div>
      <h4>React Project - starting out</h4>
    </div>
  );
}
