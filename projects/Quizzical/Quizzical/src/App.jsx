import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";

function App() {
  const [quizz, setQuizz] = useState([]);

  async function getQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    );
    const resQuiz = await res.json();
    setQuizz(resQuiz.results);
    console.log(resQuiz);
  }

  useEffect(() => {
    getQuiz();
  }, []);

  const quizQuestions = quizz.map((quiz) => {
    return <Quiz quiz={quiz} />;
  });

  return (
    <div className="App">
      <img className="blob1" src="./Images/blob1.png" alt="" />
      <img className="blob2" src="./Images/blob2.png" alt="" />
      <section> {quizQuestions}</section>
    </div>
  );
}

export default App;
