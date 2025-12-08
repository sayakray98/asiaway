import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MenuProvider from "./context/MenuProvider.jsx";


const basename = import.meta.env.MODE === "production" ? "/asiaway" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
    </MenuProvider>
  </StrictMode>
);
