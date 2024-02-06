import React from "react";
// import {Routes, Route, useLocation, Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <>
      <Router>
        <React.StrictMode>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </React.StrictMode>
      </Router>
    </>
  );
}

export default App;
