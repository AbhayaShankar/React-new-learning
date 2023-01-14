```javascript
import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});

  console.log("Component rendered");
  // This will give an infinite loop of "component rendered"
  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
```
