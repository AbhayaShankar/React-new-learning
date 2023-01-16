import React from "react";
import abhaya from "./Images/Abhaya.PNG";

export default function Contacts({ data }) {
  return (
    <div className="cardDetails">
      <div className="cardDetails-main">
        <h4>Good Morning!</h4>
        <div className="card-info">
          <h3>{data[0].name}</h3>
        </div>
      </div>
    </div>
  );
}
