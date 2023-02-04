import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./component/Die";
// import reactLogo from "./assets/react.svg";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid(),
      });
    }
    // console.log(newArray);
    return newArray;
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
    // console.log(die);
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
      <main className="main">
        <h1 className="tenzies">Tenzies</h1>
        <br />
        <p className="text">
          Roll until all dice are the same. Click each die to freze as it as its
          current value between rolls.
        </p>
        <br />
        <br />
        <div className="dice-container">{diceValue}</div>
        <button onClick={() => setDice(allNewDice)} className="roll">
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
