import React from 'react';
import {Link} from 'react-router-dom';
import Dropserv from './pages/dropdown';
import logo from '../assets/icons/main.png';

function Header () { 
    return (
        <div className="header">
            <div className="header__wrapper">
            <div className="header__logo"> 
                 <img src={logo} alt="My logo" />
            </div>
            <div  className="header__menu">
                <ul>
                <li><Link to='/' className="header__link"> <Dropserv/></Link> </li>
                
                    <li><Link to='/menu' className="header__link" > About Us</Link></li>
                    <li><Link to='/story' className="header__link" > Location</Link></li>
                    <li><Link to='/story' className="header__link" > Blog</Link></li>
                    <li><Link to='/story' className="header__link" > Having a car problem?</Link></li>
                </ul>
                
            </div>
            </div>
        </div>
    )
}



export default Header;