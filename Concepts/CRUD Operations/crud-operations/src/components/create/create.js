import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [isFilled, setIsFilled] = useState(false);
  //   console.log(firstName);
  //   console.log(lastName);

  const sendDataToAPI = () => {
    //   console.log(firstName);
    //   console.log(lastName);
    axios.post("https://63eb6730bfdd429967471ca8.mockapi.io/Crud", {
      firstName,
      lastName,
    });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Button onClick={sendDataToAPI} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
