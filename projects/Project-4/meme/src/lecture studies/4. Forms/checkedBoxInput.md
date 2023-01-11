The Method for Checkbox is different from other Input types
Checkbox doesnt have value but a boolean value,
If true then show selected , False show unseleetced.
For that focus is how to resolve the state inside our react code.

```javascript
import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
  });

  function handleChange(event) {
    // A good Practice is to destructure the event.target
    // We require name , value , type of input field and the checked property of checkbox. So instead of writing [event.target.name] : event.target.value
    // We can simply replace it with name and value as it is being destructured from event.target
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value, // Adding ternary condition :
        // Chceking if type is checkbox ,  then use checked property or else use value property.
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
        value={formData.firstName}
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly} // using checked instead of value as checkbox doesnt has value but a boolean value of ischecked or not
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
    </form>
  );
}
```
