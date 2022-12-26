import React from "react";
import "../index.css";

export default function Maincontent() {
  return (
    <div className="main">
      <h1 className="react-h">Fun Facts about React</h1>
      <ul className="facts">
        <li>Was released in 2013</li>
        <li>Was originally created by jordan walke</li>
        <li>Has well over 100k stars on github</li>
        <li>It is maintained by facebook.</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </div>
  );
}
