import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import { nanoid } from "nanoid";

function App() {
  /*
    main Three objectives are there : 

    1. We need to create a starting page which when clicked takes us to the next quiz page.
    2. When we go the the quizpage , we have to fetch data from API and render a question and 4 options (MCQ), with a submit button.
    3. When the submit button is clicked, need to shoe which answers are correct and change the state of the options baeed on whether the abswer is corrwct or wrong.

    On the first page(Intro --> description and start button to start the quiz.)

    Important takes from this :
    How to handle state in different cases.
    How to make API calls and take in informations from there.
    How to handle State of answers, holding whhile other answrs are  being selected
  */
  const [flip, setFlip] = useState(false);

  return (
    <div className="App">
      <img className="blob1" src="./Images/blob1.png" alt="" />
      <img className="blob2" src="./Images/blob2.png" alt="" />

      {/* based on flip is false or true, using ternary operator to display Intro / Quiz page. */}
      {!flip ? (
        <Intro flip={flip} setFlip={setFlip} />
      ) : (
        <Quiz flip={flip} setFlip={setFlip} />
      )}
    </div>
  );
}

export default App;
