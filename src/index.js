import React, { StrictMode } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("entry")
);

reportWebVitals();
