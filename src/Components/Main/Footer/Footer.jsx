import React from 'react';
import './footer.css';
import { ImFacebook } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

import logo from '../../../Assets/MoonValleyTours-Logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logo">
          <a href="/">
            <img src={logo} className="footerLogo" alt="" />
          </a>
          <div className="socials flex">
            <a href="https://facebook.com/moonvalleytours">
              <ImFacebook className="icon" />
            </a>
            <a href="https://instagram.com/moonvalleytours">
              <AiFillInstagram className="icon" />
            </a>
            <a href="https://wa.me/message/UPGWJOKGKLBJF1">
              <RiWhatsappFill className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="/Destination">Destination</a>
          </li>
          <li>
            <a href="/Support">Support</a>
          </li>
          <li>
            <a href="/Terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="/Privacy">Privacy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="http://moonvalleytours.com/destination">Explore</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+54 641995548</span>
          <span className="email">info@moonvalleytours.com</span>
        </div>
      </div>
      <div className="copyright">
        MoonValleyTours© | By
        <a href="https://brianzenhom.dev">brianzenhom.dev</a>
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
