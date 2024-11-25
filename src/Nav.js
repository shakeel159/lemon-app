import './Nav.css';
import logo from './img/logo.png';

const nav = () =>{
    return (
        <div className='NavBar'>
            <nav className='Navbuttoms'>
                <ul className='navList'>
                    <li class="nav-item">
                        <a className='links' href="./">Home</a>
                    </li>
                    <li class="nav-item">
                        <a className='links' href="./">About</a>
                    </li>
                    <li class="nav-item">
                        <a className='links' href="./">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a className='links' href="./">Reservation</a>
                    </li>
                    <li class="nav-item">
                        <a className='links' href="./">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default nav;