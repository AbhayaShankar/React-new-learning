import React from "react";
import image from "./Images/image.png";
import memesdata from "./memesdata";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/4xgqu.jpg",
  });
  console.log(meme);
  function handleChange(event) {
    const { name, type, value } = event.target;
    setMeme((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  }

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
          <input
            className="input"
            type="text"
            placeholder="top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="input"
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn" onClick={getMemeImage}>
            Get a new meme Image{" "}
            <img className="img-image" src={image} alt="image-png" />{" "}
          </button>
          {/* <img id="image-root" src={imgurl} alt="image-meme" /> */}
        </div>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
