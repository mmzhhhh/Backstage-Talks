import React from "react";
import ReactDOM from "react-dom/client";
import "./css/output.css";
import "./css/fullpage-override.css";
import "./css/fullpage-custom.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
