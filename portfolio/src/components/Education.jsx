import React, { useState, useEffect } from 'react';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: "BE in Computer Engineering",
      school: "Vivekanand Education Society's Institute of Technology",
      period: "Aug 2020 - May 2024",
      gpa: "9.28 cgpi"
    },
    {
      degree: "College",
      school: "Wamanrao muranjan junior college",
      period: "Aug 2018 - Mar 2020",
      gpa: "91.23%"
    },
    {
      degree: "School",
      school: "Wamanrao muranjan madhyamik vidyalaya",
      period: "Aug 2008 - Mar 2018",
      gpa: "92.40%"
    }
  ];

  return (
    <section id="education" className={`education-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-item-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                </div>
                <div>
                  <p className="education-period">{edu.period}</p>
                  <p className="education-gpa">{edu.gpa}</p>
                </div>
              </div>
              {edu.description && <p className="education-description">{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 