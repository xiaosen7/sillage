import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// styles
import "uno.css";
import "virtual:unocss-devtools";
import "@unocss/reset/tailwind.css";
import "animate.css";
import "./global.scss";

const root = document.querySelector("#root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
