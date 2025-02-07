import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // can be "!" instead of "as HTMLElement"

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
