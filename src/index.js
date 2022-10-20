import React from "react";
import ReactDOM from "react-dom/client";
import CustomCursor from "utils/CustomCursor";
import App from "./containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <CustomCursor />
  </React.StrictMode>
);
