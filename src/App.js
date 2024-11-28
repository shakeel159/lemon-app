import React from "react";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";

import "./App.css";

function App() {
  return (
    <div className='app-container'>
    <Header></Header>
    <div className='Nav-container'>
      <Nav></Nav>
    </div>
    <Main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Main>
    <Footer>

    </Footer>
    </div>
  );
}

export default App;
