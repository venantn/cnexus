import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#about">About</a></p>
  <p><a href="#services">Why Us</a></p>
  <p><a href="#contact">Contact</a></p>
</>
)
const Navbar = () => {
  const[toggleMenu, setToggleMenu]= useState(false);
  return (
    <div className="cnexus__navbar">
      <div className="cnexus__navbar-links">
        <div className="cnexus__navbar-links_logo">
          <p>CULTURENEXUS VENTURES </p>
        </div>
        <div className="cnexus__navbar-links_container">
          <Menu/>
        </div>
      </div>
      
      <div className="cnexus__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="cnexus__navbar-menu_container scale-up-center">
          <div className="cnexus__navbar-menu_container-links">
            <Menu/>
          </div>
          
        </div>
        )}
      </div>
     </div>
  );
};

export default Navbar;