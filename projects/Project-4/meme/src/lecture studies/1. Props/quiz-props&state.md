1. How would you describe the concept of "state"?
   A way for React to remember saved values from within a component.
   This is similar to declaring variables from within a component,
   with a few added bonuses (which we'll get to later)

2. When would you want to use props instead of state?
   Anytime you want to pass data into a component so that
   component can determine what will get displayed on the
   screen.

3. When would you want to use state instead of props?
   Anytime you want a component to maintain some values from
   within the component. (And "remember" those values even
   when React re-renders the component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
   Unchanging. Props are immutable.State is mutable.

5. What is State in react?
   • In React, a component's state is an object that holds values that belong to that component and determines how that component should behave. The state can be thought of as the source of truth for a component. It is similar to props, but unlike props, a component's state is mutable. This means that a component can change its own state, but props cannot be changed.
   • The state is an important concept in React because it allows a component to maintain an internal, private record of data that it can use to control its own behavior. When a component's state changes, the component re-renders itself to reflect the new state.

6. What is the Difference between props and state?
   • Props are values that are passed to a component from its parent component. Props are read-only, which means that a component cannot modify its own props. A component can only receive props from its parent component.

• State is a component's internal, mutable data. A component can change its own state, but it cannot change its own props. State is used to control a component's behavior and render the component's UI based on the state.
