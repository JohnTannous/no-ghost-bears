import React from 'react';
import { menuItems } from './menuItems';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-section' id='menu'>
      <h2 className='menu-title'>Menu</h2>
      <div className='menu-container'>
        <div className='menu-column'>
          <h3 className='column-title'>Specialty Coffee</h3>
          <ul className='menu-items'>
            {menuItems
              .filter((item) => item.category === 'specialty')
              .map((item) => (
                <li key={item.id}>
                  <span className='item-name'>{item.name}</span>
                  <span className='item-price'>{item.price}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className='menu-column'>
          <h3 className='column-title'>Other Drinks</h3>
          <ul className='menu-items'>
            {menuItems
              .filter((item) => item.category === 'other')
              .map((item) => (
                <li key={item.id}>
                  <span className='item-name'>{item.name}</span>
                  <span className='item-price'>{item.price}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className='menu-column'>
          <h3 className='column-title'>Food</h3>
          <ul className='menu-items'>
            {menuItems
              .filter((item) => item.category === 'food')
              .map((item) => (
                <li key={item.id}>
                  <span className='item-name'>{item.name}</span>
                  <span className='item-price'>{item.price}</span>
                </li>
              ))}
          </ul>
              </div>
              </div>
      <a href="https://hrtbrkcoffee.square.site/s/order" className="menu-button">Order Now</a>
    </div>

  );
};

export default Menu;
