import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "IT Operation Associate",
      company: "Yotta Data Services",
      period: "Jul 2024 - Feb 2025",
      description: [
        "As an IT Operations Associate at Yotta Data Services, I am part of the DevOps team, primarily working with MyPortal, an interface designed for customers to raise queries and track them efficiently.",
        "My role involves ensuring the seamless operation and performance of MyPortal, troubleshooting any issues that may arise, and collaborating with cross-functional teams to resolve technical challenges. I play a key role in maintaining system uptime, addressing user concerns, and ensuring a smooth customer experience through proactive monitoring and support."
      ]
    }
  ];

  return (
    <section id="experience" className={`experience-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-card">
                <h3 className="experience-role">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-description-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 