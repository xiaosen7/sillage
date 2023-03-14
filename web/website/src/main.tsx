import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// styles
import "uno.css";
import "virtual:unocss-devtools";
import "animate.css";
import "./global.css";
import "reset-css";

const root = document.querySelector("#root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
