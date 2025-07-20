import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/#home" className="navbar-brand" onClick={closeMenu}>
          Utsav Gavli
        </Link>
        
        {/* Mobile menu button */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/#home" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/#about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/#projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/#experience" onClick={closeMenu}>
            Experience
          </Link>
          <Link to="/#education" onClick={closeMenu}>
            Education
          </Link>
          <Link to="/#skills" onClick={closeMenu}>
            Skills
          </Link>
          <Link to="/#certificates" onClick={closeMenu}>
            Certificates
          </Link>
          <Link to="/#contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
