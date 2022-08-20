//* Base
import React from "react";
import ReactDOM from "react-dom/client";
//* Components
import App from "./App";

const DOMRoot = document.getElementById("root");

const root = ReactDOM.createRoot(DOMRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
