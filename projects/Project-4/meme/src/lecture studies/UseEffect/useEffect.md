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
