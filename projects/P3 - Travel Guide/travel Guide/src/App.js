import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import dataset from "./dataset";

function App() {
  const cardElements = dataset.map((data) => {
    return <Main key={dataset.id} data={data} />;
  });
  return (
    <div>
      {/* <h1>gdkg</h1> */}
      <Navbar />
      <section>{cardElements}</section>
    </div>
  );
}

export default App;
