import React from "react";
// import merch from "../src/Images/merch.jfif";
// import soldout from "../public/Images/soldout.png";
import star from "./Images/star.png";
import "./index.css";

export default function Card({ dataset }) {
  return (
    <div className="card-content">
      <div>
        {/* if ({stock==0}) {
            
        } */}
        {dataset.openSpots === 0 && (
          <img className="soldout-img" src={dataset.soldoutImg} alt="soldout" />
        )}
        <img className="merch" src={dataset.img} alt="merch" />
      </div>
      <div className="rating">
        <img src={star} alt="star" />
        <p>
          {dataset.rating}
          <span>
            ({dataset.stats.views}) • {dataset.location}
          </span>
        </p>
      </div>
      <p>{dataset.title}</p>
      <h4>
        From {dataset.price}
        <span>/ person</span>
      </h4>
    </div>
  );
}
