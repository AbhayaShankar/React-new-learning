import React from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

export default function sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? "show" : null}`}>
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div key={index} className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
