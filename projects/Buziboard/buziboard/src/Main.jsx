import React from "react";
import abhaya from "./Images/Abhaya.PNG";
export default function Main({ data }) {
  return (
    <div className="card--0">
      <div className="card">
        <div className="card-top">
          <h3>Buziboard</h3>
          <button className="btn">Get your card</button>
        </div>
        <div className="card-main">
          <div className="card-img">
            <img src={abhaya} alt="" />
          </div>
          <div className="card-details">
            <h4 className="Name">{data.name}</h4>
            <h4 className="nickname">({data.username})</h4>
            <div className="card-email">{data.email}</div>
            <div className="card-address">
              <div className="card-address-1">{data.address.street}</div>
              <div className="card-address-2">{data.address.suite}</div>
              <div className="card-address-3">{data.address.city}</div>
            </div>
            <div className="card-mobile">{data.phone}</div>
            <div className="card-website">{data.website}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
