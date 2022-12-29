import React from "react";

export default function Jokes({ setup, punchline, isPun }) {
  // console.log(isPun);
  return (
    <div>
      <hr />
      {/* conditional rendering */}

      {setup && (
        <div className="jokes-content">
          <h4>Setup :</h4>
          <p> {setup}</p>
        </div>
      )}
      <div className="jokes-content">
        <h4> Punchline :</h4>
        <p>{punchline}</p>
      </div>
      {/* <hr /> */}
    </div>
  );
}
