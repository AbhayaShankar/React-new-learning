import React from "react";
import globepng from "../src/Images/globe.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-navbar">
        <img src={globepng} alt="globe" />
        <h3> My Travel Journal</h3>
      </div>
      <h3 className="owner"> ~~ Abhaya Shankar</h3>
    </nav>
  );
}
