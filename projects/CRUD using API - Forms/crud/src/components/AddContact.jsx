import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddContact({ addContactHandler, history }) {
  let navigate = useNavigate();
  const [contactItem, setContactItem] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setContactItem({ ...contactItem, [event.target.name]: event.target.value });
    console.log(contactItem);
  };

  // previous bug was because I was wrapping the code inside link which forced it to navigate before actually submitting.

  // we use useNavigate instead of history now...
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactItem.name === "" || contactItem.email === "") {
      alert("All fields are mandatory");
    } else {
      addContactHandler(contactItem);
      setContactItem({ name: "", email: "" });
      navigate("/");
      // this.props.history.push("/");
      // console.log("duh duh", this.props);
      // console.log("duh duh", this.props);
    }
  };

  return (
    <div className="my-5 mb-5">
      <div className="form">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-start gap-4">
            <label htmlFor="name">Name: </label>
            <input
              className="px-2 py-1 outline-none border-0 bg-slate-100 rounded-lg"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={contactItem.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-start gap-4">
            <label htmlFor="name">Email: </label>
            <input
              className="px-2 py-1 outline-none border-0 bg-slate-100 rounded-lg"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              value={contactItem.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="border-2 bg-gray-500 px-5 py-1 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
