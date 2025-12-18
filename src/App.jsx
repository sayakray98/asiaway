import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/react.svg"; // or remove if unused
import "./App.css";
import "../src/styles/global.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Mobilemenu from "./components/Header/HeaderMoobilePage/Menumobile";
import Travelmanagementservices from "./pages/ServicePage/Travelmanagementservices/Travelmanagementservices";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travelmanagementservices" element={<Travelmanagementservices />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Mobilemenu />
    </>
  );
}

export default App;
