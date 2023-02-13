import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;