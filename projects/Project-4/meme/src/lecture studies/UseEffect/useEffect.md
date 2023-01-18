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

Do you know some effects have a clean phase?
Well It is essentially to **undo** an effect for cases like subscription.

Let's talk about Cleanup function :

In React, a `cleanup` function is a function that is executed when a component is _unmounted_ or when certain props or state changes. The purpose of a cleanup function is to perform any necessary actions to _clean up_ or _reset_ any resources or state that the component was using. This can include things like canceling network requests, removing event listeners, or resetting timers.

A cleanup function is typically defined within a component and is passed to the React `useEffect` hook, which is used to manage side effects within a component. The `useEffect` hook takes two arguments: the first is the effect function, and the second is a dependency array. The effect function is executed when the component is mounted or updated, and the dependency array is used to determine when the effect function should be re-run. The cleanup function is returned from the effect function and is executed when the component is unmounted or when the component's dependencies change.

```javascript
useEffect(() => {
  ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
  // This below is the cleanup fucntion...
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
  };
});
```

Let's say in this case we pass {props.id} = 1 on first render and then it changes to {prop.id} = 2,
What do you think we happen behind the scene ?

- React cleans up the effect for {id: 1}.
- React renders UI for {id: 2}.
- React runs the effect for {id: 2}

Well this is not the case...

Actually what happens is :

- React renders UI for {id: 2}.
- The browser paints. We see the UI for {id: 2} on the screen.
- React cleans up the effect for {id: 1}.
- React runs the effect for {id: 2}.

**Every function inside the component render (including event handlers, effects, timeouts or API calls inside them) captures the props and state of the render call that defined it.**

So lets elaborate on this topic :

```javascript
// First render, props are {id: 1}
function Example() {
  // ...
  useEffect(
    // Effect from first render
    () => {
      ChatAPI.subscribeToFriendStatus(1, handleStatusChange);
      // Cleanup for effect from first render
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(1, handleStatusChange);
      };
    }
  );
  // ...
}

// Next render, props are {id: 2}
function Example() {
  // ...
  useEffect(
    // Effect from second render
    () => {
      ChatAPI.subscribeToFriendStatus(2, handleStatusChange);
      // Cleanup for effect from second render
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(2, handleStatusChange);
      };
    }
  );
  // ...
}
```

A beautiful quote :
_Kingdoms will rise and turn into ashes, the Sun will shed its outer layers to be a white dwarf, and the last civilization will end. But nothing will make the props “seen” by the first render effect’s cleanup anything other than {id: 1}_

Lets take another example to understand the cleanup fucntion :

Here, we wanted to track the width of the window as we change the size of the window (may that be width or height).
We defined a state which keeps track of our width as we change the window width/height. A button can toggle the display of width.

```javascript
const [show, setShow] = React.useState(true);

function toggle() {
  setShow((prevShow) => !prevShow);
}

return (
  <div className="container">
    <button onClick={toggle}>Toggle WindowTracker</button>
    {show && <WindowTracker />}
  </div>
);
```

---

```javascript
import React, { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
```

Suppose we toggle off the display and now we can't see the width of the window and we change the width. We would get an error like :

`!Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker `

If we dont specify the cleanup function, it seems to have something called as **Memory Leak**.
A `memory leak` in useEffect can occur when an effect function is not cleaned up properly when a component is `unmounted` or when certain props or state changes. This can cause the effect function to continue running even though the _component is no longer being rendered_, leading to unnecessary _resource usage and potential performance issues_.

To oveercome this issue we need to resolve this by introducing a cleanup function :

```javascript
import React, { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
    // cleanup fucntion
    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
```

Here are a few common causes of memory leaks in `useEffect` :

- Not returning a cleanup function
- Incorrect dependency array
- Not cleaning up event listeners
- Not cleaning up timers or intervals
- Not cleaning up network requests

To avoid **memory leaks**, you should always make sure that your effect functions return a cleanup function, and that the cleanup function handles any necessary cleanup tasks such as canceling network requests, removing event listeners, and clearing timers or intervals. Additionally, make sure to specify the dependency array correctly.

----- Dependency array --------

One thing that people face are running into infinite loops. Even me during my starting days, I would ran into a effect hook runnning for infinite times. It would seem that code written is correct, where did it go wrong. Well no need to worry, enters dependency array to the rescue.

We already know that the `useEffect` takes two parameters -
First - an effect function
Second - A dependency array

The effect function is executed when the component is mounted or updated, and the `dependency` array is used to determine when the effect function should be re-run. The `dependency` array is an array of variables or state that the effect function depends on. If any of the values in the dependency array change, the effect function is re-run.

The purpose of the dependency array is to control when the effect function is re-run and to prevent unnecessary re-renders. If a variable or state is included in the dependency array, the effect function will re-run whenever that variable or state changes. If a variable or state is not included in the dependency array, the effect function will not re-run when that variable or state changes.

.

.
.
So that seems to be goiing fine. Lets take up another example to have a deeper udnerstanfing of the concepts here :

```javascript
import React, { useState, useEffect } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(
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
