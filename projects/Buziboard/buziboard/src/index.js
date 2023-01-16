import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./cardstyle.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./About";
import Projects from "./Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
