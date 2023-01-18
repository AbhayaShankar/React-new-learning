Refer the Documentation by the genius - Dan Abramov.

Link : https://overreacted.io/a-complete-guide-to-useeffect/

Prerequisites :

• You should know how React components are defined.

• How component is rendered.

• How do props, state and useState works...

Now once all that is done, lets get to the topic :
Take a sip of your coffee and lets get on with this -

Before Talking about Effect, we need to understand rendering.
lets take an example of counter :

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Here our counter is set to 0 and component returns "You clicked 0 times" where 0 comes from the defined state. Once the component is rendered, if the button is clicked, React calls our component again. It then updates the state from count = 0 to count = 1;

There is no such "data binding" or "React watching" our each move, Once the State is changed, the whole component is then re-rendered.

Let's take different example of a component containing Event handler having counter :

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
```

Let's take this task :
What do you think will happen if I click "Click" button 5 times real quick and then once "Show alert" and again "Click" button 3 times and fast enough before the timeout in handleAlertClick is resolved.
What do you think what would be the alert ?

- If you said 8, So Yes, you have the opportunity to learn from this
- Its actually going to be 5.

What happens is even though the state of counter is changed to 8, yet handleAlertClick remembers the state at the time it was clicked.

Lets deep dive how this happens:

React component renders , setState = 0 , Component renders with "You clicked 0 times";

- Click button pressed , Component renders "You clicked 1 times"
- Click button pressed , Component renders "You clicked 2 times"
- Click button pressed , Component renders "You clicked 3 times"
- Click button pressed , Component renders "You clicked 4 times"
- Click button pressed , Component renders "You clicked 5 times"

Then :

- Show alert button pressed , handleAlertClick is called and it remembers the state value as 5 and alert is called which will be then called after 3000ms.

Again :

- Click button pressed , Component renders "You clicked 6 times"
- Click button pressed , Component renders "You clicked 7 times"
- Click button pressed , Component renders "You clicked 8 times"

And then we wait to fire Timeout function -
Since when handleAlertClick() remembers the state value at the time it was called, the alert message shows "You clicked on : 5"

Guess you got it this time.
Great! lets move forward...

Till this we haven't been talking about useEffect()
Guess what, It isn't much different than what we have been doing here. Amusing right! Let's see how :

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

What we have seen in above cases how state stores and updates value, Same is done in case of effects.

It’s not the count variable that somehow changes inside an “unchanging” effect. It’s the effect function itself that’s different on every render.

We know now that effects run after every render, are conceptually a part of the component output, and “see” the props and state from that particular render.

Lets understand this with this example :

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```

What will happen if I click "Click" button 5 times ?

Yes, I hope you are correct this time.
It will diplay after the 3000ms interval after timeout fires :

- "You clicked 1 times"
- "You clicked 2 times"
- "You clicked 3 times"
- "You clicked 4 times"
- "You clicked 5 times"

As button is clicked, the onClick fucntion is called and it remembers the state value at that time, but it console.logs the value after 3000ms after the timeout interval fires.

.
.

.
.
.

.

.
.
So that seems to be goiing fine. Lets take up another example to have a deeper udnerstanfing of the concepts here :

```javascript
import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(
    function () {
      console.log("Effect ran");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
```

Let me take you through this -

- First, the component is rendered count is set to 1, Browser is painted with "The count is 1"
- Button with "Get Next Character"
- Then, it goes to useEffect function , fetches the api `https://swapi.dev/api/people/1` as the count value is 1 and the returned data is set to starWarsData and since the state is changed, it then re renders the whole component and now updates the DOM with the fetched api to display on screen.

- Again, it checks for the dependency if anything changes. Since, the count value is passed as a dependency to the useEffect and the value of count is not changed it will not render anything after this.

After that if the "Get Next Character" is clicked, it changes the count value from 1 to 2. Since the state is changed it then again re-renders the component again.

- the component is rendered count is set to 2, Browser is painted with "The count is 2"
- Button with "Get Next Character"
- Then, it goes to useEffect function , fetches the api `https://swapi.dev/api/people/2` as the count value is 2 now and the returned data is set to starWarsData and since the state is changed, it then re renders the whole component and now updates the DOM with the fetched api to display on screen.

- Again, it checks for the dependency if anything changes. Since, the count value (only will be changed if the button "Get Next Character" is clicked) is not changed again so it will not render anymore.

Note :

`JSON.stringify(starWarsData, null, 2)` is a JavaScript expression that converts the `starWarsData` object to a string in JSON (JavaScript Object Notation) format. The **first argument** of the `JSON.stringify()` method is the _object_ to be converted. The **second argument** is the _replacer function_, which is used to filter-out values. In this case, it is passed as `null` so no filter-out is applied. The **third argument** is the number of spaces to use for _indentation_ when pretty-printing the JSON string. In this case, it is passed as `2`, so the JSON string will be indented with 2 spaces.
