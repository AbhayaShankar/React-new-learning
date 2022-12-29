import React from "react";
import Navbar from "../src/Navbar";
import Content from "../src/Content";
import Card from "./Card";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <div className="panel">
        <Card
          img="/Images/merch.jfif"
          rating="4.5"
          views="6"
          place="Tokyo"
          title="Naruto anime merch T-shirts - Trending online"
          price="$20"
        />

        <Card
          img="/Images/enma.webp"
          rating="4.9"
          views="21"
          place="Japan"
          title="Zoro - Enma : The Demon Sword"
          price="$85"
        />
        <Card
          img="/Images/sneaker.jpg"
          rating="5.0"
          views="233"
          place="USA"
          title="Luffy X Nike Sneakers"
          price="$99.95"
        />

        <Card
          img="/Images/Luffy.jpg"
          rating="5"
          views="165"
          place="Japan"
          title="Luffy Bounty Poster"
          price="$12"
        />

        <Card
          img="/Images/batman.webp"
          rating="3.9"
          views="3"
          place="USA"
          title="Bobblehead : Batman"
          price="$2"
        />
      </div>
    </div>
  );
}

export default App;
