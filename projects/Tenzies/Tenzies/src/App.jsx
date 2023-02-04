import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./component/Die";
import Confetti from "react-confetti";
// import reactLogo from "./assets/react.svg";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You have won!");
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(generateNewDie());
    }
    // console.log(newArray);
    return newArray;
  }

  function rollDice(id) {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceValue = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div>
      {tenzies && <Confetti />}
      <main className="main">
        <h1 className="tenzies">Tenzies</h1>
        <br />
        <p className="text">
          {tenzies
            ? "Congrats! You won the game"
            : "Roll until all dice are the same. Click each die to freze as it as its current value between rolls"}
        </p>
        <br />
        <br />
        <div className="dice-container">{diceValue}</div>
        <button onClick={rollDice} className="roll">
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </div>
  );
}
export default App;
