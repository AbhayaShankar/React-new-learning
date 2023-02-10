import { useState, useRef } from "react";

export default function timer() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intialValue = useRef(0);

  function startTimer() {
    setStart(Date.now());
    setNow(Date.now());
    console.log(intialValue.current);
    clearInterval(intialValue.current);

    intialValue.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function stopTimer() {
    clearInterval(intialValue.current);
    console.log(intialValue.current);
  }

  let seconds = 0;
  if (start !== null && now !== null) {
    seconds = (now - start) / 1000;
  }

  return (
    <>
      <p>Timer : {seconds.toFixed(3)}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </>
  );
}
