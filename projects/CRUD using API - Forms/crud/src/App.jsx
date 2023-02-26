import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
// import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
// import Contacts from "./Data";
import { v4 as uuidv4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    console.log(contact);
  };

  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (contactList) {
      setContacts(contactList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
