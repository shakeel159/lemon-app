
import logo from './img/logo.png';

const nav = () =>{
    return (
        <div>
            <div>
                <img src={logo}/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="./">Home</a>
                    </li>
                    <li>
                        <a href="./">About</a>
                    </li>
                    <li>
                        <a href="./">Menu</a>
                    </li>
                    <li>
                        <a href="./">Reservation</a>
                    </li>
                    <li>
                        <a href="./">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default nav;