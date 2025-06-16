import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Utsav Gavli</span></h1>
        <p className="hero-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <div className="hero-buttons">
          <a href="https://github.com/utsav145" target="_blank" rel="noopener noreferrer" className="hero-button-primary">
            GitHub
          </a>
          <NavLink to="/#contact" className="hero-button-secondary">
            Contact Me
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero; 