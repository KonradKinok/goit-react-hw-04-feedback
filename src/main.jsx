import './globalStyles/index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import * as Cafe from "./components/Cafe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cafe.Feedback />
  </React.StrictMode>,
);
