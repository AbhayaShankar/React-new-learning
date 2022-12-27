import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.css";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Info />
      <About />
      <Interest />
      <Footer />
    </>
  );
}
