import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="info-text">Feel free to reach out to me through the following channels. I'm always open to new opportunities and collaborations!</p>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:utsavgavli463@gmail.com" className="info-value">utsavgavli463@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">+91 9136768641</span>
            </div>
            <div className="info-item">
              <span className="info-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/utsav-gavli-163489231" target="_blank" rel="noopener noreferrer" className="info-value">utsav-gavli-163489231</a>
            </div>
            <div className="info-item">
              <span className="info-label">GitHub:</span>
              <a href="https://github.com/utsav145" target="_blank" rel="noopener noreferrer" className="info-value">utsav145</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
