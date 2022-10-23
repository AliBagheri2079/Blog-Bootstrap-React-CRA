import React from "react";
import ReactDOM from "react-dom/client";
import SSRProvider from "react-bootstrap/SSRProvider";

import App from "./containers/App";
import UserInfo from "./containers/Bootstrap/UserForm.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <App />
      <UserInfo />
    </SSRProvider>
  </React.StrictMode>
);
