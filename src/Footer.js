import './Footer.css';
import MenuPage from "./Menu.js";
import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const footer = () =>{
    const handleScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return(
        <div className='FooterHead'>
            <p>© 2024 LittleLemon Inc. All rights reserved.</p>
            <div className="Footer_Body">
                <div className="Pages">
                <h3 className="Invisiable_head">Pages</h3>
                <Link to={'./'} onClick={handleScrollToTop}>
                    <p>Home</p>
                </Link>
                <Link to={'./menu'} onClick={handleScrollToTop}>
                    <p>Menu</p>
                </Link>
                <Link to={'./about'} onClick={handleScrollToTop}>
                    <p>About</p>
                </Link>
                </div>
                <div className="Contact">
                <h3 className="head">Contact</h3>
                <p>Email</p>
                <p>Address</p>
                <p>Phone</p>
                </div>
                <div className="Socials">
                <h3 className="head">Socials</h3>
                <p>Twitter</p>
                <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default footer;