import React, { useRef } from "react";
import { useLocation } from "react-router";
import Avatar from "../Images/avatar.png";

function ContactDetails(props) {
  const location = useLocation();
  console.log(location);

  return (
    <div className="mt-10 flex flex-col gap-6 items-center justify-center">
      <div>
        <img className="w-48 h-48" src={Avatar} alt="avatar" />
      </div>
      <div className="gap-3 flex flex-col font-semibold tracking-widest items-center justify-start">
        <h1>Abhaya Shankar</h1>
        <h1>shankarabhaya9@gmail.com</h1>
      </div>
    </div>
  );
}

export default ContactDetails;
