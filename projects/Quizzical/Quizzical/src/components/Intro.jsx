import React from "react";

export default function Intro({ flip, setFlip }) {
  function flipPage() {
    setFlip((prevFlip) => !prevFlip);
  }

  return (
    <div className="container">
      <div className="intro-container">
        <h1>Quizzical</h1>
        <h2>Test your quizzical skills...</h2>
        <button onClick={flipPage} className="intro-btn">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
