```javascript
import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["a", "b", "c"]);
  const len = messages.length;
  // using ternary operator to add condiitons.
  return (
    <div>
      <h3>
        {" "}
        You have {len === 0
          ? "You're all caught up!"
          : `${len} unread ${len > 1 ? "messages" : "message"}`}{" "}
      </h3>
    </div>
  );
}
```
