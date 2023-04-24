import React from 'react';
import './About.css';
import aboutImage from '../../assets/about.png';

function About() {
  return (
    <div className="about-container" id="about">
      <div className="left-section">
        <h1>About Us</h1>
        <p>One stop Coffee destination. Locally Roasted Coffee & BaKed treats. Humbly support local. DTLA</p>
        <p>New Location, New Name, New Hours…. SAME FIRE COFFEE 🔥☕️</p>
        <p>No Ghost Bears presents 808s and HRT BRK</p>
      </div>
      <div className="right-section">
        <div className="image-container">
          <img src={aboutImage} alt="About Us" className="about-image" />
          <div className="overlay">
            <div className="caption">Our New Location</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;