import React from "react";
import ReactDOM from "react-dom/client";
import { JssProvider } from "react-jss";

import App from "./containers/App";
import CustomCursor from "utils/CustomCursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JssProvider id={{ minify: true }}>
      <App />
      <CustomCursor />
    </JssProvider>
  </React.StrictMode>
);
