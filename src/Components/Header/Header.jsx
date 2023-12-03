import React from 'react';
import Logo from '../../assets/novelnest.png';
import { Button } from '@mui/material';
import './Header.css';
import * as ROUTES from '../../Constants/routes.js';


const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={Logo} alt="NovelNest Logo" />
      </div>
      <nav className="navbar">
        <Button className='btn' href={ROUTES.HOME} variant="text" color="dark">Home</Button>
        <Button className='btn' href={ROUTES.BOOKS} variant="text" color="dark">Books</Button>
        <Button className='btn' href={ROUTES.ABOUT_US} variant="text" color="dark">About Us</Button>
        <Button className='btn' href={ROUTES.CONTACT} variant="text" color="dark">Contact</Button>
      </nav>
      <div className="CTA-Btn">
        <Button href={ROUTES.SING_UP} variant="contained" color="primary">Sign-Up</Button>
        <Button href={ROUTES.LOG_IN} variant="contained" color="primary">Log-In</Button>
      </div>
    </header>
  );
}

export default Header;