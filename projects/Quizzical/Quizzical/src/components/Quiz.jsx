import React, { useState, useEffect } from "react";
import Question from "./Question";

export default function Quiz({ flip, setFlip }) {
  const [data, setData] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // fetching API and storing results into data using setData.
  async function getQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    );
    const result = await res.json();
    setData(result.results);
    console.log(result);
  }

  useEffect(() => {
    getQuiz();
  }, []);

  const quizQuestions = data.map((question, index) => {
    return (
      <section>
        <Question
          key={index}
          {...question}
          quizScore={quizScore}
          setQuizScore={setQuizScore}
          quizCompleted={quizCompleted}
        />
        <hr />
      </section>
    );
  });

  function flipPage() {
    setFlip((prevFlip) => !prevFlip);
  }

  // if quizCompleted is false then remain in this page or else switch page to start page.
  function checkAnswers() {
    if (!quizCompleted) {
      setQuizCompleted((prevQuizQuestions) => !prevQuizQuestions);
    } else {
      flipPage();
    }
  }

  return (
    <div className="quiz-container">
      {quizQuestions}

      {/* conditional rendering score when the check answers button is clicked and the state changes from false to true */}
      <div className="quiz-score">
        {quizCompleted && (
          <h4>You have scored {quizScore}/5 correct answers </h4>
        )}
        <button className="check-btn" onClick={checkAnswers}>
          {quizCompleted ? "Play again" : "Check Answers"}
        </button>
      </div>
    </div>
  );
}
