import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/context";

export default function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenuContainer = container.current;
    const { center, bottom } = location;
    submenuContainer.style.left = `${center}px`;
    submenuContainer.style.top = `${bottom - 3}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`submenu ${isSubmenuOpen ? "show" : null}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, url, icon } = link;
            return (
              <a key={index} href={url}>
                {icon} {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
