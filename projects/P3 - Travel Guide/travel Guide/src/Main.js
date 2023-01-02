import React from "react";
import location from "./Images/location.png";
// import img from "./Images/japan.webp";

export default function Main({ data }) {
  return (
    <div className="container">
      <div className="list">
        <div className="location-image">
          <img src={data.coverImg} alt="japan" />
        </div>
        <div className="content">
          <div className="location-site">
            <div className="location-icon">
              <img src={location} alt="location" />
              <p>{data.country}</p>
            </div>
            <a href={data.link}> Get your tickets </a>
          </div>
          <h1>{data.place}</h1>
          <p className="travel-date">{data.traveldate}</p>
          <p className="desc">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
