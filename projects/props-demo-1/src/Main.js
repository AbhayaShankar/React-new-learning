import React from "react";
import "../src/Images/kit1.jfif";
import "../src/Images/kit2.jpg";
import "../src/Images/kit3.jpg";
import "../src/Images/kit4.jpg";
import call from "../src/Images/call.png";
import mail from "../src/Images/mail.png";

export default function Main(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="kitten" src={props.img} alt="kitten-img" />
      <h2>{props.name}</h2>

      <div className="contact-phn">
        <img src={call} alt="phone-img" />
        <p> {props.phn}</p>
      </div>

      <div className="contact-mail">
        <img src={mail} alt="mail-img" />
        <p> {props.email}</p>
      </div>
    </div>
  );
}
