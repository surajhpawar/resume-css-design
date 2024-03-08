import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/assets/fonts/Gilroy-Regular.ttf";
import "../public/assets/fonts/Gilroy-Thin.ttf";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
