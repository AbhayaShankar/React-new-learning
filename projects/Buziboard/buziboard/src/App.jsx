import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Main from "./Main";

export default function App() {
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

  const cardElements = data.map((data) => {
    return <Main key={data.id} data={data} />;
  });

  return (
    <div>
      <Navbar />
      <section className="card--">{cardElements}</section>
    </div>
  );
}
