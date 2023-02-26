import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Contacts from "./Data";
import ContactDetails from "./components/ContactDetail";
import { v4 as uuidv4 } from "uuid";
import api from "./api/api";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //retrieving data from api call
  const retrieveContact = async () => {
    const res = await api.get("/contacts");
    return res.data;
  };
  retrieveContact();

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    console.log(contact);
  };

  // loacl storage getting the items
  useEffect(() => {
    // const contactList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (contactList) {
    //   setContacts(contactList);
    // }
    const getAllContacts = async () => {
      const allContacts = await retrieveContact();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  // local storage setting the items
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // for deleting the contact
  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          exact
          element={
            <ContactList contacts={contacts} getContactId={removeContact} />
          }
        />

        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />

        <Route path={`contact/:id`} element={<ContactDetails />} />
      </Route>
    )
  );

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
