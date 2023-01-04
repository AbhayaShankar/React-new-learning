import React from "react";
import troll from "./Images/troll.png";

export default function Navbar() {
  return (
    <div className="container">
      <div className="left-cont">
        <img src={troll} alt="logo-img " />
        <h2 className="heading"> Meme Generator</h2>
      </div>
      <h2> React Course - Project 3</h2>
    </div>
  );
}
