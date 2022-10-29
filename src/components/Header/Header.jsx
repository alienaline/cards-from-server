import React from 'react';
import logo from '../../assets/img/logo.png';
import HeaderStyles from './Header.module.css';

function Header() {
    return (
        <header className={HeaderStyles.header}>
            <img 
                alt='logo'
                src={logo}/>
        </header>
    );
}

export default Header;