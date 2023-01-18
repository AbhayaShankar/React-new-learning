1. What is a "side effect" in React? What are some examples?

   Side effects are fucntionalities or behaviour that are not directly related to rendering a component. Some examples may invlude - making network request , DOM updation or interacting eith an API.

- Making a network request to fetch data
- Updating the browser's DOM
- Interacting with a browser API such as the Geolocation API
- Setting up a timeout or interval

2. What is NOT a "side effect" in React? Examples?

   Any behavior or functionality that is directly related to the rendering of a component would not be considered a side effect. Some examples of this include:

- Updating the state or props of a component
- Conditionally rendering elements based on the state or props of a component
- Passing down props from a parent component to a child component
- Using a component's state or props to calculate and display a value

3. When does React run your useEffect function? When does it NOT run
   the effect function?

   React runs the useEffect function after the component has rendered for the first time and after each subsequent render. The useEffect function is not run during the initial render of the component.

   React uses a mechanism called "dependency array" to determine if and when to re-run the effect function. React will compare the current values of the dependencies with the previous values and re-run the effect function if any of the dependencies have changed. If no dependencies are provided or if the dependency array is an empty array, the effect function will only be run once, after the first render.

   React will not run the effect function if one of the dependencies has not changed.

4. How would you explain what the "dependecies array" is?

   Depedency array is a parameter passed to effect function which decides the parameter to be kept re-rendering if the state of that parameter changes.React will compare the current values of the dependencies with the previous values and re-run the effect function if any of the dependencies have changed.
