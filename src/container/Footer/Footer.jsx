import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <a href="https://www.facebook.com/hrtbrkcoffee/"><FaFacebook className="footer__icon" /></a>
        <a href="https://www.instagram.com/noghostbears/"><FaInstagram className="footer__icon" /></a>
        <a href="https://www.twitter.com/"><FaTwitter className="footer__icon" /></a>
      </div>
      <div className="footer__info">
        <p className="footer__name">HRT BRK by No Ghost Bears</p>
        <p className="footer__address">808 S Spring Street</p>
        <p className="footer__address">Los Angeles, CA 90014 </p>
        <p className="footer__hours">Hours of Operation: Monday - Friday, 7am - 10am and 4pm-10pm</p>
        <p className="footer__hours">Hours of Operation: Saturday - Sunday, 8am - 10am and 4pm-10pm</p>
      </div>
      <div className="copyright">
        <h5>Created by John Tannous</h5>
        <h5>Copyright © {year} JT</h5>
      </div>
    </footer>
  );
};

export default Footer;
