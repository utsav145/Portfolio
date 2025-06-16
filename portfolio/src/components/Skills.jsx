import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C#", "SQL"],
    "Frontend": ["React"],
    "Backend": ["Spring Boot", "Node.js", "Express"],
    "Tools & Frameworks": ["Machine Learning", "Jest", "Streamlit", "Docker"]
  };

  return (
    <section
      id="skills"
      className={`skills-section transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
