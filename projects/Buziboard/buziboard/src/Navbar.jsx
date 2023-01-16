import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar-div">
      <h3 className="navbar-name">
        <Link className="buziboard" to="/">
          Buziboard{" "}
        </Link>
      </h3>
      <div className="navbar-links">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/projects">
          Contact
        </Link>
      </div>
    </div>
  );
}
