1. What do props help us accomplish?

Ans :
• Props are used to store data that can be then aaccessible or can be accessed by the children of the react components.
• They are a part of code reusability.
• Every parent component can pass some information to its child components by giving them props.

2. How do you pass a prop into a component?

• We can pass a prop as an argument into a component.
• A prop returns a Object, the children of which can then be used similar to how we use objects.
• Ex: Function(props){
name = "xyz"
email = "abc@gmail.com"
contact = "9796131734"
}

{props.name} ---> returns "xyz"
{props.email} ---> abc@gmail.com etc...

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

• No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
   function Navbar(props) { // we pass props as in arguments
   return (
   <header>
   ...
   </header>
   )
   }

5. What data type is `props` when the component receives it?

• An Object
