import React from "react";

function Header() {
  return (
    <div>
      <h1
        className=" bg-slate-500 text-3xl font-semibold text-center text-slate-600 pt-5 box shadow-sm pb-5 shadow-white"
        style={{
          position: "sticky",
          top: "0px",
          left: "0px",
          color: "#ffffff",
        }}
      >
        Crud Operations
      </h1>
    </div>
  );
}

export default Header;
