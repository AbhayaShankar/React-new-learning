import React, { useRef, useState } from "react";
import Timer from "./timer";
import Pure from "./pureComponents";

function App() {
  // console.log(refValue);
  // const refValue = useRef(0);
  // function handleClick() {
  //   refValue.current = refValue.current + 1;
  //   console.log(refValue.current);
  // }
  // in this example you can see how changing values of useRef doesn't triggers a re-render.
  // even though the value of refValue is changed but it is not updated in the JSX element.
  // shows it doesnt change the state of the compnent
  // noticed one thing, if we change the value doent change the state value but as soon as we save the file, it remembers the value at that time at sets the default value to that.

  return (
    <div className="App">
      {/* <h1>Abhaya</h1>
      <p>The value of refValue is {refValue.current}</p>
      <button onClick={handleClick}>clcik</button> */}
      <Timer />
      {/* <Pure /> */}
    </div>
  );
}

export default App;
