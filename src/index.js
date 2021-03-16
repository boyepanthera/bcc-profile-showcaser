import React, { StrictMode } from "react";
import { render } from "react-dom";
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
