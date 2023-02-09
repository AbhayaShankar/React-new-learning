import React, { useState, useEffect } from "react";
import { decode } from "html-entities";

export default function Question({
  question,
  quizScore,
  setQuizScore,
  quizCompleted,
  correct_answer,
  incorrect_answers,
}) {
  // answer list from the API call, later shuffling them within the other options.
  const [ansList, setAnsList] = useState([]);

  // answer selected by the user.
  const [selAnswer, setSelAnswer] = useState("");

  // Index of the ans selected.
  const [ansIndex, setAnsIndex] = useState();

  // checking whether the answer is correct or not
  const [isCorrect, setIsCorrect] = useState();

  useEffect(() => {
    if (ansList.length === 0) {
      const generateRandomAnswer = randomAnswer([
        correct_answer,
        ...incorrect_answers,
      ]);
      setAnsList(generateRandomAnswer);
    }

    if (isCorrect && quizCompleted) {
      setQuizScore((prevScore) => prevScore + 1);
    }
  }, [quizCompleted]);

  //Fisher-Yates shuffle algorithm, which is used to randomly shuffle the elements in an array
  function randomAnswer(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // console.log(arr);
    return arr;
  }

  const answerOptions = ansList.map((ans, index) => {
    return (
      <button
        className={`answer-btn ${ansIndex === index ? "selected" : null} 
        ${!quizCompleted ? null : checkAnswer(index, ans)}`}
        id={index}
        value={ans}
        onClick={(event) => handleClick(event, index)}
      >
        {decode(ans)}
      </button>
    );
  });

  function checkAnswer(index, ans) {
    if (
      (isCorrect && ansIndex === index) ||
      (!isCorrect && ans === correct_answer)
    ) {
      return "correct";
    } else if (ansIndex === index && !isCorrect) {
      return "wrong";
    } else {
      return null;
    }
  }

  function handleClick(event, index) {
    if (event.target.value !== selAnswer) {
      setSelAnswer(event.target.value);
      setAnsIndex(index);
      event.target.value === correct_answer
        ? setIsCorrect(true)
        : setIsCorrect(false);
    }
  }

  return (
    <div className="question-container">
      <h1>{decode(question)}</h1>
      <section className="answer-options">{answerOptions}</section>

      {/* button to see what randomAnswerfunction generates. */}
      {/* <button
        onClick={() => randomAnswer([correct_answer, ...incorrect_answers])}
      >
        click
      </button> */}
    </div>
  );
}
