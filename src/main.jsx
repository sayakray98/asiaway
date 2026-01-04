import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../src/styles/global.css";
import App from "./App.jsx";
import MenuProvider from "./context/MenuProvider.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MenuProvider>
  </StrictMode>
);
