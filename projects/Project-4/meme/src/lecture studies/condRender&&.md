```javascript
// How to use && condiitional operator
import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["a", "b"]);
  const len = messages.length;
  return <div>{len != 0 && <h1>You have {len} unread messages!</h1>}</div>;
}
```
