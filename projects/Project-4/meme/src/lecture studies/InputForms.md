```javascript
import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState(
    { firstName: "", lastName: "" } // here we are passing
    // form state as an object.
  );
  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
        // This returns the name property from the state and handles any change in value happening in the
        // object.
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
    </form>
  );
}
```
