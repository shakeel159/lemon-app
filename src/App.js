
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HomePage from "./Home.js";
import ReservationPage from "./Reservation.js";
import ContactPage from "./Contact.js";
import AboutPage from "./About.js";
import MenuPage from "./Menu.js";
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;