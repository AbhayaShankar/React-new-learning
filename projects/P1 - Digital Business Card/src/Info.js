import React from "react";
import styles from "./index.css";
import dp from "../src/images/dp.PNG";
import linkedin from "../src/images/linkedin-logo-3.png";
import mail from "../src/images/mail.png";

export default function Info() {
  return (
    <div className="info-main">
      <img className="dp-img" src={dp} alt="dp" />
      <h2> Abhaya Shankar </h2>
      <h4> Frontend Developer </h4>
      <a href="#">
        {" "}
        <p> Abhaya's - Portfolio </p>{" "}
      </a>
      <div className="info-main-content">
        <div className="info-content">
          <img src={mail} alt="mail" />
          <p> Email </p>
        </div>

        <div className="info-content">
          <img src={linkedin} alt="mail" />
          <p> Linkedin </p>
        </div>
      </div>
    </div>
  );
}
