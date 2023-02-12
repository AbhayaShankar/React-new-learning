import React from "react";
import { useGlobalContext } from "../context/context";

export default function Submenu() {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <aside className={`submenu ${isSubmenuOpen ? "show" : null}`}>
      Submenu
    </aside>
  );
}
