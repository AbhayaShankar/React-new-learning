import React from "react";
import image from "./Images/image.png";
import memesdata from "./memesdata";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/4xgqu.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesdata);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const memeIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[memeIndex].url;
    console.log(url);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
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
      <img className="meme-image" src={meme.randomImage} alt="meme-image" />
    </div>
  );
}
