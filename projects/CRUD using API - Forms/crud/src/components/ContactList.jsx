import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "./ContactCard";

function ContactList({ contacts, getContactId }) {
  console.log(contacts);

  const deleteContact = (id) => {
    getContactId(id);
  };

  // const contactss = [
  //   {
  //     id: "1",
  //     name: "ABhaya",
  //     email: "shan@gmail.com",
  //   },
  // ];

  const ContactListItems = contacts.map((contact, index) => {
    return (
      <div className="my-6">
        <ContactCard
          key={contact.id}
          contact={contact}
          clickHandler={deleteContact}
        />
      </div>
    );
  });

  return (
    <div className="mt-12 ">
      <div className=" flex items-center justify-center mb-12  ">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-gray-400 tracking-wider font-semibold mr-10">
            Contacts...
          </p>
          <Link to={"/add"}>
            <button
              className="py-3 px-6 bg-slate-500 text-white
            font-semibold tracking-widest rounded-2xl ml-10 hover:bg-slate-400 transition ease-linear delay-100"
            >
              Add Contact
            </button>
          </Link>
        </div>
      </div>
      <div>{ContactListItems} </div>;
    </div>
  );
}

export default ContactList;
