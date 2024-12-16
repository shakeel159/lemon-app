import { Link } from "react-router-dom";
import { useState,useRef, useEffect } from "react";
import logo from './img/logo.png';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  };

  return (
    <div className="NavBar">
         <div className='img-container'> 
            <img className={logo} src={logo}/>
        </div>

      {/* Hamburger menu for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon">☰</span>
      </div>

      {/* Navbar items */}
      <nav className={`NavButtons ${isMenuOpen ? "open" : ""}`}>
        <ul className="navList">
          <li className="nav-item">
            <Link className="links" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/reservation">Reservation</Link>
          </li>
          <li className="nav-item">
            <Link
            className="links"
            to="/about" >About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;