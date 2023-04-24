import React from 'react';
import logo from '../../assets/logo.png'

import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
        <img src={logo} alt="app__logo" />
    </div>
    <div>
      <h1 className='nav_title'>No Ghost Bears</h1>
    </div>
      <ul className="navbar-links">
        <li ><a href="#home">Home</a></li>
        <li ><a href="#about">About</a></li>
        <li ><a href="#favorites">Favorites</a></li>
        <li ><a href="#menu">Menu</a></li>
        <li ><a href="#gallery">Gallery</a></li>
    </ul>
    <div>
      <p>*unoffical webpage*</p>
    </div>
  </nav>
);

export default Navbar;
