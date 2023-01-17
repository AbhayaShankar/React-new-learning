import React from "react";
import abhaya from "./Images/Abhaya.PNG";
export default function Main({ data }) {
  return (
    <div className="card-0">
      <div className="card-top"></div>
      <div className="card-image">
        <img src={abhaya} alt="photo" />
      </div>
      <div className="card-main">
        <h2 className="card-name">{data.name}</h2>
        <p className="card-username">({data.username})</p>
        <p className="card-email">{data.email}</p>
        <p className="card-address">
          {data.address.street} , {data.address.city}{" "}
        </p>
      </div>
      <button className="card-more-info">Get your card</button>
      <div className="card-website">
        <div className="card-website-name"> {data.website}</div>
      </div>
    </div>
  );
}
