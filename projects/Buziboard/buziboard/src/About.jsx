import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Contacts from "./Contacts";

export default function About() {
  const [user, setUser] = useState([]);

  async function userDetail() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`
    );
    const resdata = await res.json();
    setUser(resdata);
    console.log(resdata);
  }

  useEffect(() => {
    userDetail();
  }, []);

  // const cardIndividual = user.map((user) => {

  // })

  return (
    <div>
      <Navbar />
      <Contacts />
    </div>
  );
}
