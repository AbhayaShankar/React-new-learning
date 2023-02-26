import React from "react";

import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  console.log(contacts);

  const ContactListItems = contacts.map((contact, index) => {
    return (
      <div className="my-6">
        <ContactCard key={index} contact={contact} />
      </div>
    );
  });

  return <div className="mt-12"> {ContactListItems} </div>;
}

export default ContactList;
