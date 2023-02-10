import React, { useReducer, useState } from "react";

function App() {
  function reducer(state, action) {
    if (action.type === "increment-age") {
      return {
        age: state.age + 1,
      };
    } else {
      throw new Error("unknown action");
    }
  }

  const [state, dispatch] = useReducer(reducer, { age: 23 });

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ type: "increment-age" });
        }}
      >
        Increment
      </button>
      <p>hey! you are {state.age} years old</p>
    </div>
  );
}

export default App;
