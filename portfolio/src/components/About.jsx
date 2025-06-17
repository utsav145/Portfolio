import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  const languages = [
    { name: "English", level: "Native" },
    { name: "Marathi", level: "Native" },
    { name: "Hindi", level: "Native" }
  ];

  return (
    <section id="about" className={`about-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          
          <div className="about-grid">
            <div>
              <h3 className="about-heading">Who I Am</h3>
              <p className="about-paragraph">
                I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions to complex problems. With several
                years of experience in the industry, I've developed a deep understanding of
                both frontend and backend technologies.
              </p>
              <p className="about-paragraph">
                My journey in tech started with a curiosity about how things work on the web,
                which led me to pursue a career in software development. I'm constantly learning
                and adapting to new technologies to stay at the forefront of web development.
              </p>
            </div>

            <div>
              <h3 className="about-heading">Languages</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>

              <h3 className="about-heading">Interests</h3>
              <div className="interests-list">
                {["Web Development", "Open Source", "AI/ML", "Cloud Computing", "UI/UX Design"].map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="resume-button-container">
            <a 
              href="https://drive.google.com/file/d/1f_HMGfn8PdYmcIIjMj1k5TyxAfkkhH9E/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
