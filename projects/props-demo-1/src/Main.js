import React from "react";
// import "/src/Images"
// import kit2 from "../src/Images/kit2.jpg";
// import "../src/Images/kit3.jpg";
// import "../src/Images/kit4.jpg";
import call from "../src/Images/call.png";
import mail from "../src/Images/mail.png";

export default function Main({ img, name, phn, email }) {
  //   console.log(props);
  //   console.log(img);
  return (
    <div className="card">
      <img className="kitten" src={img} alt="kitten-img" />
      <h2>{name}</h2>

      <div className="contact-phn">
        <img src={call} alt="phone-img" />
        <p> {phn}</p>
      </div>

      <div className="contact-mail">
        <img src={mail} alt="mail-img" />
        <p> {email}</p>
      </div>
    </div>
  );
}
