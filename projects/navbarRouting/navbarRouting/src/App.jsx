import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  // Here we built a Navbar with responsive design and when the display width is less than 800px then a hamburger icon appears and animated navbar is viewed.

  // We used useState and useRef to build this navbar. A great project. Simple yet tricky, good to develop a hands-on on the topic and getting started.
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
