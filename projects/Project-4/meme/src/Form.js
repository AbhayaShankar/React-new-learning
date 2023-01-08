import React from "react";
import image from "./Images/image.png";
import memesdata from "./memesdata";

export default function Form() {
  const [memeUrl, setMemeUrl] = React.useState(
    "https://i.imgflip.com/4xgqu.jpg"
  );

  function getMemeImage() {
    const memeArray = memesdata.data.memes;
    const memeIndex = Math.floor(Math.random() * memeArray.length);
    const newUrl = memeArray[memeIndex].url;
    setMemeUrl(newUrl);
    console.log(newUrl);
  }

  return (
    <div>
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
      <img className="meme-image" src={memeUrl} alt="meme-image" />
    </div>
  );
}
