Refer the Documentation by the genius - Dan Abramov.
Link :
https://overreacted.io/a-complete-guide-to-useeffect/

Prerequisites :
You should know how React components are defined.
How component is rendered.
How do props, state and useState works...
Now once all that is done, lets get to the topic :
Take a sip of your coffee and lets get on with this -

Notes :

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
