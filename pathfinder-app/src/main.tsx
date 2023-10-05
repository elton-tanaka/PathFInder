import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesHandler from "./routes.tsx";
// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesHandler />
    </BrowserRouter>
  </React.StrictMode>
);
