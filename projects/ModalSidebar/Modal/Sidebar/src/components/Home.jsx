import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useCustomContext } from "../Context/Context";

export default function Home() {
  //   const data = useContext(AppContext);
  const { openSidebar, openModal } = useCustomContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <div className="home-center-section">
        <p className="home-text">
          This Project is based on useContext, Context API and how to use Custom
          Hooks. Enjoy the Project and I'll see you soon...
        </p>

        <button onClick={openModal} className="btn">
          Show Modal
        </button>
      </div>
    </main>
  );
}
