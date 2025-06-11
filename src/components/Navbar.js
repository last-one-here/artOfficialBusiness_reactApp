import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // We will create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/">[Your Name/Brand Here]</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {/* Optional Blog Link */}
        {/* <li><NavLink to="/blog">Blog</NavLink></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

