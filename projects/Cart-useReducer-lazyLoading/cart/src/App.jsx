import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import { useGlobalContext } from "./context/context";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
