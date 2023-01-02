import React from "react";
// import merch from "../src/Images/merch.jfif";
// import soldout from "../public/Images/soldout.png";
import star from "./Images/star.png";
import "./index.css";

export default function Card({
  soldout,
  img,
  rating,
  views,
  place,
  title,
  price,
  stock,
}) {
  return (
    <div className="card-content">
      <div>
        {/* if ({stock==0}) {
            
        } */}
        {stock === 0 && (
          <img className="soldout-img" src={soldout} alt="soldout" />
        )}
        <img className="merch" src={img} alt="merch" />
      </div>
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
