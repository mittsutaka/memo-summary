import React from "react";
import ReactDOM from "react-dom/client";
import MemoIndexContainer from "./components/pages/memo-index/MemoIndexContainer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MemoIndexContainer name="tessst" />
  </React.StrictMode>
);
