import React from "react";
import logo from "../Images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">Products</button>
          </li>
          <li>
            <button className="link-btn">developers</button>
          </li>
          <li>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}
