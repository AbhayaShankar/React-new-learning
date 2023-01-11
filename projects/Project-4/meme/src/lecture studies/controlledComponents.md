CONTROLLED COMPONENTS IN REACT :

In React, a controlled component is a form element whose value is controlled by the React state. This means that the value of the input element, such as a text field or checkbox, is managed by the component's state rather than the DOM (Document Object Model).

When a user interacts with the form element, the onChange event is triggered, which updates the state with the new value. Because the state is the source of truth for the value of the form element, the input will always reflect the current state, even if the user tries to change it directly in the DOM.

To create a controlled component, you'll need to add a value prop to the form element and an onChange event handler that updates the state with the new value.

A good practice is to make our REACT State is what drives state that is inside the input box.

```javascript
import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} // so here the value property tells the DOM input field what to display rather than html telling our react Code
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
    </form>
  );
}
```

Now whenever we are changing the text inside our input field,
every change is monitored or registered by our handleChange function updates our state which then re-renders our form and which sets the input value whatever state is...
value = {formData.firstName} --- current state
So State is the driver telling the input box what to display
rather than the other way around.

```javascript
// Text Area in Input field.
/*
We just need to update state and notice that the name should be same as the state value so as to ensure our handleChange function works properly.
*/
<textarea
  value={formData.comments}
  placeholder="Comments"
  onChange={handleChange}
  name="comments"
/>
```

```javascript
// If we click on the text beside checkbox, it should select the checkbox :
// There are two methods for doing this.
//One is nesting our input inside label so that input checkbox and label text are an integral part : Selecting either one will select or deselect the checkbox.

<label >
    <input type="checkbox" /> Are You interested in joining
</label>

// Other is using "htmlFor" this links the label text with the input checkbox element so that whenever the label is clicked it will select or deselect the checkbox. This is rather more good practice to write this way as which label is pointing to which input checkbox.
<input
    type="checkbox"
    id="isFriendly"
/>
<label htmlFor="isFriendly">Are you friendly?</label>
<br />


```
