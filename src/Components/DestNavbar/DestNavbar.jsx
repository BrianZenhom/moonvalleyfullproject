import React, { useState, useEffect, useRef } from 'react';
import './destnavbar.css';
import logoImage from '../../../Assets/MoonValleyTours-Logo.png';
import { FaWindowClose } from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';

const DestNavbar = () => {
  // Toggle ShowNav code
  const [active, setActive] = useState('navBarDest');
  const showNav = () => {
    setActive('navBar activeNavbar');
  };
  // Change menu toggle color on scroll
  const [menuOn, setMenuOn] = useState('toggleNavbar');
  const changeMenu = () => {
    if (window.scrollY >= 10) {
      setMenuOn('toggleNavbar toggleNavColor');
    } else {
      setMenuOn('toggleNavbar');
    }
  };
  window.addEventListener('scroll', changeMenu);
  return (
    <div className="navBarSectionDest">
      <div className="headerDest">
        <div className="LogoSvgDest">
          <img src={logoImage} alt="" />
        </div>

        <div className={active}>
          <ul className="navListsDest flex">
            <li className="navItemDest">
              <a href="/" className="navLinkDest">
                Home
              </a>
            </li>

            <li className="navItemDest">
              <a href="/destinations" className="navLinkDest">
                Destinations
              </a>
            </li>

            <li className="navItemDest">
              <a href="/" className="navLinkDest">
                Services
              </a>
            </li>

            <li className="navItemDest">
              <a href="/" className="navLinkDest">
                Contact
              </a>
            </li>

            <li className="navItemDest">
              <a href="/" className="navLinkDest">
                About
              </a>
            </li>

            {/* <div ref={domNode} className="headerBtns flex">
              <button className={loginC}>
                <a className="LoginColor" href="#">
                  Login
                </a>
              </button>
              <button className={signupC}>
                <a href="#">Signup</a>
              </button>
            </div> */}
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <FaWindowClose className="icon" />
          </div>
        </div>

        <div onClick={showNav} className={menuOn}>
          <HiViewGrid className="icon" />
        </div>
      </div>
    </div>
  );
};

export default DestNavbar;
