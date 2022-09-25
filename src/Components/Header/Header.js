import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='Header-nav'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <a href="/shopping">Shopping</a>
                <a href="/home">Order Review</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;