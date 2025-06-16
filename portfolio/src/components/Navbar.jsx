import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/#home" className="navbar-brand">
          Utsav Gavli
        </Link>
        <div className="navbar-links">
          <Link to="/#home">
            Home
          </Link>
          <Link to="/#about">
            About
          </Link>
          <Link to="/#projects">
            Projects
          </Link>
          <Link to="/#experience">
            Experience
          </Link>
          <Link to="/#education">
            Education
          </Link>
          <Link 
            to="/#skills"
          >
            Skills
          </Link>
          <Link to="/#certificates">
            Certificates
          </Link>
          <Link to="/#contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 