import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setALert] = useState(false);
  const bgColor = rgb.join(",");
  const hexColor = rgbToHex(...rgb);
  console.log(bgColor);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setALert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={() => {
        setALert(true);
        navigator.clipboard.writeText(hexColor);
      }}
    >
      <p className="weight"> {weight}%</p>
      <p className="hex-code">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard </p>}
    </article>
  );
};

export default SingleColor;
