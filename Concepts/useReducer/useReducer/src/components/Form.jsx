import React, { useReducer } from "react";

export default function Form() {
  const ACTION_TYPES = {
    INCREMENT_AGE: "increment",
    CHANGE_NAME: "change_name",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.INCREMENT_AGE: {
        return {
          name: state.name,
          age: state.age + 1,
        };
      }
      case ACTION_TYPES.CHANGE_NAME: {
        return {
          name: action.nextName,
          age: state.age,
        };
      }
    }
    throw Error("ERROR OCCURRED!!");
  }

  const initialState = {
    name: "Abhaya",
    age: 23,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick() {
    dispatch({
      type: ACTION_TYPES.INCREMENT_AGE,
    });
  }

  function handleChange(e) {
    dispatch({
      type: ACTION_TYPES.CHANGE_NAME,
      nextName: e.target.value,
    });
  }

  return (
    <div>
      <input value={state.name} onChange={handleChange} />
      <button onClick={handleClick}>Increment Age</button>
      <p>
        Hey! {state.name}. You are {state.age} years old
      </p>
    </div>
  );
}
