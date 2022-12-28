import React from "react";
import airbnb from "../src/Images/airbnb.png";

export default function Navbar() {
  return (
    <nav>
      <img className="airbnb-logo" src={airbnb} alt="airbnb-logo" />
    </nav>
  );
}
