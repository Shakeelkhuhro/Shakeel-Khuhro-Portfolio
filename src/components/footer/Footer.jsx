import React from "react";
import "./footer.css";
import {FiLinkedin} from 'react-icons/fi';
import {SiFacebook} from 'react-icons/si';
import {FaInstagram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer-logo">
        <img src={logo} alt="Portfolio logo"/>
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li><a href="#experience">Experience</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Tetimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://linkedin.com/in"><FiLinkedin/></a>
        <a href="https://facebook.com"><SiFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Shakeel Khuhro, All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
