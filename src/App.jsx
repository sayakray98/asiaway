import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

              
       
          <Route path="/*" element={<Home />} />

        
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
