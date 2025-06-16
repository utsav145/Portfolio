import React, { useState, useEffect } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certificates = [
    {
      title: "Python for data science",
      date: "", // Date not provided in image
      credentialId: "UC-d20a976c-0e02-4b37-b47f-e80cdca45c3e",
      link: "https://www.udemy.com/certificate/UC-d20a976c-0e02-4b37-b47f-e80cdca45c3e/"
    },
    {
      title: "IBM Data Science",
      date: "", // Date not provided in image
      credentialId: "J3A2BZLJNKJ3", 
      link: "https://www.coursera.org/account/accomplishments/professional-cert/J3A2BZLJNKJ3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      date: "", // Date not provided in image
      credentialId: "F3CBDD80C382F560", 
      link: "https://learn.microsoft.com/api/credentials/share/en-us/UtsavGavli-2713/F3CBDD80C382F560?sharingId=74679E325F8F7D77"
    }
  ];

  return (
    <section id="certificates" className={`certificates-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="certificates-container">
        <h2 className="certificates-title">Certifications</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <h3 className="certificate-name">{cert.title}</h3>
              {cert.date && <p className="certificate-detail">Issued: {cert.date}</p>}
              {cert.credentialId && <p className="certificate-detail">Credential ID: {cert.credentialId}</p>}
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  Verify Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 