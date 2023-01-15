import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Dataset from "./Dataset";
import Main from "./Main";

export default function App() {
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
    console.log({ getData });
  }

  const cardElements = Dataset.map((data) => {
    return <Main key={Dataset.id} data={data} />;
  });
  return (
    <div>
      <Navbar />
      <section className="card--">{cardElements}</section>
      <Link to="/about">About</Link>
      <br />
      <Link to="/projects">Projects</Link>
    </div>
  );
}
