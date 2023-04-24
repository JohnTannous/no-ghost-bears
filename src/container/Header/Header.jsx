import React from 'react';

import './Header.css';
import { Title, Heart } from '../../components';

const Header = () => (
  <div className="header-container" id="home">
    <Title />
    <Heart />
  </div>
);

export default Header;
