```javascript
import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      // id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));

  return <main>{squareElements}</main>;
}
```

---

BOX COMPONENT

```javascript
import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return <div style={styles} className="box" onClick={props.toggle}></div>;
}
```

---

BOXES DATA SET

```javascript
export default [
  {
    id: 1,
    on: true,
  },
  {
    id: 2,
    on: false,
  },
  {
    id: 3,
    on: true,
  },
  {
    id: 4,
    on: true,
  },
  {
    id: 5,
    on: false,
  },
  {
    id: 6,
    on: false,
  },
];
```
