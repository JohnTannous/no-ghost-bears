import React from 'react';
import logo from '../../assets/logo.png'

import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
        <img src={logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li ><a href="#home">Home</a></li>
        <li ><a href="#about">About</a></li>
        <li ><a href="#favorites">Favorites</a></li>
        <li ><a href="#menu">Menu</a></li>
        <li ><a href="#gallery">Gallery</a></li>
        <li ><a href="#contact">Contact</a></li>
      </ul>
  </nav>
);

export default Navbar;
