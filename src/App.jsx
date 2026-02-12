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
import Fleets from "./pages/Fleets/Fleets";
import Travelmanagementservices from "./pages/ServicePage/Travelmanagementservices/Travelmanagementservices";
import Blogs from "./Blog/Blogs";
import Itinerary from "./pages/Itinerary/Itinerary";
import ScrollToTop from "./pages/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>

      <ScrollToTop />
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Travelmanagementservices />} />
          <Route path="/fleets" element={<Fleets />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="*" element={<Home />} />
        
      </Routes>
      <Mobilemenu />
    </>
  );
}

export default App;
