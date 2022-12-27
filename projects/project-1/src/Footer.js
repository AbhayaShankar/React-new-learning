import React from "react";
import styles from "./index.css";
import twit from "../src/images/twitter.png";
import git from "../src/images/github.png";
import fb from "../src/images/fb.png";
import insta from "../src/images/insta.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twit} alt="twitter-logo" />
      <img src={git} alt="github" />
      <img src={fb} alt="fb-logo" />
      <img src={insta} alt="insta-logo" />
    </div>
  );
}
