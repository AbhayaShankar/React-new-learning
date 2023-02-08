import { useState } from "react";
import Values from "values.js";
import SingleColor from "./components/SingleColor";

function App() {
  /*
    Main idea of the project is :
    1. We will have a form submit the color value and a HandleSubmit button which will handle the value and generate a color value.
    2. We will iterate over the value submitted to generate differebt tints and shades of the color value and display them.

  */

  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#FF5A5F").all(10));

  function HandleSubmit(e) {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      // console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h1>Color Generator</h1>
        <form className="form" onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="#BBBE64"
            value={color}
            className={`${error ? "error" : "color-code"}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
