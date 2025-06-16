import React, { useEffect, useRef } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import BugTrackingSystem from './components/BugTrackingSystem';
import Skillshare from './components/Skillshare';

function App() {
  const location = useLocation();
  const sectionRefs = useRef({});

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = sectionRefs.current[id];
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const setRef = (el, id) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={
            <>
              <div ref={el => setRef(el, 'home')}><Hero /></div>
              <div ref={el => setRef(el, 'about')}><About /></div>
              <div ref={el => setRef(el, 'skills')}><Skills /></div>
              <div ref={el => setRef(el, 'experience')}><Experience /></div>
              <div ref={el => setRef(el, 'education')}><Education /></div>
              <div ref={el => setRef(el, 'projects')}><Projects /></div>
              <div ref={el => setRef(el, 'certificates')}><Certificates /></div>
              <div ref={el => setRef(el, 'contact')}><Contact /></div>
            </>
          } />
          <Route path="/projects/bug-tracking-system" element={<BugTrackingSystem />} />
          <Route path="/projects/skillsharers" element={<Skillshare />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 Your Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 