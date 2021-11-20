import React from 'react';
import logo from '../assets/icons/main.png';


function Footer () { 
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__inner">
                <img className="footer__logo" src={logo} alt="My logo" />
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">About Us</a></li>
                    <li> <a href="#">Services</a></li>
                    <li> <a href="#">Locations</a></li>
                    <li> <a href="#">Blog</a></li>
                    <li> <a href="#">Contacts</a></li>
                </ul>
                </div>
                <div className="footer__lower">
                    <h2 className="footer__lower-title">WrenchDoc. All right reserved</h2>
                    <p>+1 000 000 00 00</p>
                </div>
            </div>
        </div>
    )
}


export default Footer;