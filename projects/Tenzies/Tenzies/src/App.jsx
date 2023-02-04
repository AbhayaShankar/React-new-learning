import { useState, useEffect } from "react";
import Die from "./component/Die";
// import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div>
      <main className="main">
        <div className="dice-container">
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>
      </main>
    </div>
  );
}

export default App;
