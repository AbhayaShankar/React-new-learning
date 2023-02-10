import React from "react";

export default function pureComponents() {
  let guest = 0;

  function Cup() {
    // Bad: changing a preexisting variable!
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  return (
    <div>
      <Cup />
      <Cup />
      <Cup />
      <Cup />
    </div>
  );
}
