import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// styles
import "uno.css";
import "virtual:unocss-devtools";
import "@unocss/reset/tailwind.css";
import "animate.css";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
