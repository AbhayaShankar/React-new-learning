import React from "react";
import logo from "../logo.svg";
import { links, social } from "../data";
import { FaTimes } from "react-icons/fa";
import { useCustomContext } from "../Context/Context";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useCustomContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : null}`}>
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="logo" />
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((socialLinks) => {
          const { id, url, icon } = socialLinks;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
