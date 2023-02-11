import React, { useReducer, useState } from "react";

function App() {
  const ACTION_TYPES = {
    INCREMENT: "increment-age",
    DECREMENT: "decrement-age",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.INCREMENT: {
        return {
          age: state.age + 1,
        };
      }
      case ACTION_TYPES.DECREMENT: {
        return {
          age: state.age - 1,
        };
      }
    }
    throw new Error("Unknown action.");
  }

  const [state, dispatch] = useReducer(reducer, { age: 23 });

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DECREMENT });
        }}
      >
        Decrement
      </button>
      <p>hey! you are {state.age} years old</p>
    </div>
  );
}

export default App;
