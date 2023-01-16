import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Contacts from "./Contacts";

export default function About() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await res.json();
    setData(resData);
    console.log(resData);
  }

  useEffect(() => {
    getData();
  }, []);

  const cardDetails = data.map((data) => {
    return <Contacts key={data.id} data={data} />;
  });
  return (
    <div>
      <Navbar />
      <section>{cardDetails}</section>
    </div>
  );
}
