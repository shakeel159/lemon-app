import { Link } from "react-router-dom";
import logo from './img/logo.png';
import './Nav.css';

const nav = () => {
  return (
    <div className="NavBar">
         <div className='img-container'> 
            <img className='logo' src={logo}/>
        </div>
      <nav className="NavButtons">
        <ul className="navList">
          <li className="nav-item">
            <Link className="links" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/reservation">Reservation</Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;