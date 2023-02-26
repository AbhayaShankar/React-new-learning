import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddContact({ addContactHandler }) {
  // console.log(addContactHandler);
  const [contactItem, setContactItem] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setContactItem({ ...contactItem, [event.target.name]: event.target.value });
    console.log(contactItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactItem.name === "" || contactItem.email === "") {
      alert("All field are mandatory");
    } else {
      console.log(contactItem);
      addContactHandler(contactItem);
      setContactItem({ name: "", email: "" });
    }
  };

  return (
    <div className="my-5 mb-5">
      <div className="form  ">
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
              className="px-2 py-1  outline-none border-0 bg-slate-100 rounded-lg"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              value={contactItem.email}
              onChange={handleChange}
            />
          </div>
          <Link to={"/"}>
            <button className="border-2 bg-gray-500 px-5 py-1 rounded-lg text-white">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
