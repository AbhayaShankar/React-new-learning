import React, { useState, useEffect } from "react";

export default function Quiz({ quiz }) {
  return (
    <div className="quiz-container">
      <h1>{quiz.question}</h1>
      <div className="options">
        <button className="answers">{quiz.correct_answer}</button>
        <button className="answers">{quiz.incorrect_answers[0]}</button>
        <button className="answers">{quiz.incorrect_answers[2]}</button>
        <button className="answers">{quiz.incorrect_answers[1]}</button>
      </div>
      <hr />
    </div>
  );
}
