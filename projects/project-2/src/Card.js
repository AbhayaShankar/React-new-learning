import React from "react";
// import merch from "../src/Images/merch.jfif";
import star from "./Images/star.png";
import "./index.css";

export default function Card({ img, rating, views, place, title, price }) {
  return (
    <div className="card-content">
      <img className="merch" src={img} alt="merch" />
      <div className="rating">
        <img src={star} alt="star" />
        <p>
          {rating}
          <span>
            ({views}) • {place}
          </span>
        </p>
      </div>
      <p>{title}</p>
      <h4>
        From {price}
        <span>/ person</span>
      </h4>
    </div>
  );
}
