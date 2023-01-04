import React from "react";
import image from "./Images/image.png";
import memesdata from "./memesdata";

export default function Form() {
  function getMemeImage() {
    const memeArray = memesdata.data.memes;
    const memeIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[memeIndex].url;
    console.log(url);
    const memeImage = document.getElementById("image-root");
    console.log(memeImage);
  }

  return (
    <div className="div">
      <div className="form-container">
        <input className="input" type="text" placeholder="top text" />
        <input className="input" type="text" placeholder="bottom text" />
      </div>
      <div>
        <button className="btn" onClick={getMemeImage}>
          Get a new meme Image{" "}
          <img className="img-image" src={image} alt="image-png" />{" "}
        </button>
        {/* <img id="image-root" src={imgurl} alt="image-meme" /> */}
      </div>
    </div>
  );
}
