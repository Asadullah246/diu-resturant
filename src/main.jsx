import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContext from "./Context/UserContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>
);
