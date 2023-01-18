import React, { useState, useEffect } from "react";
import image from "./Images/image.png";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/4xgqu.jpg",
  });
  console.log(meme);
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  }

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dataset) => setAllMeme(dataset.data.memes));
  }, []);

  /* Here we shouldn't use async await ,mmmm lets see why?
  
  useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMeme(data.data.memes);
  }, []);
*/

  function getMemeImage() {
    const memeIndex = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[memeIndex].url;
    console.log(url);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  return (
    <div className="div--">
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
