
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HomePage from "./Home.js";
import Book from "./About.js";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="nav">
        <Nav />
      </div>
      <div className="main-container">
        <div className='main'>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Book />} />
            <Route path="/menu" element={<HomePage />} />
            <Route path="/reservation" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
          </Routes>
        </Main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;