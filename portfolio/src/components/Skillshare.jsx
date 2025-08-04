import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Skillshare.css';

const Skillshare = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`skillshare-page ${isVisible ? 'is-visible' : ''}`}>
      <div className="ss-container">
        <Link to="/" className="back-button">Back to Projects</Link>
        <h1 className="ss-title">SkillSharers - Skill Sharing & Hiring Platform</h1>

        <h2 className="ss-subtitle">Overview</h2>
        <p className="ss-paragraph">
          SkillSharers is an innovative web application designed to connect individuals seeking specific skills 
          with professionals offering their expertise. It functions as a marketplace where users can share their 
          skills, offer services, and also find and hire skilled individuals for various tasks and projects. 
          The platform creates a dynamic ecosystem for skill exchange, professional networking, and service-based 
          transactions, enabling users to monetize their expertise while helping others achieve their goals.
        </p>

        <h2 className="ss-subtitle">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Skill Marketplace</h3>
            <p>A comprehensive platform for professionals to offer their skills and for users to find and connect with talent for various projects.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">User Authentication</h3>
            <p>Secure login and registration system with JWT token-based authentication and role-based access control.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Profile Management</h3>
            <p>Customizable user profiles showcasing skills, experience, service offerings, and expertise information.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Direct Messaging</h3>
            <p>Real-time communication system allowing users to discuss projects, negotiate terms, and collaborate effectively.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Skill Request System</h3>
            <p>Users can post requests for specific skills, and professionals can respond with detailed proposals and offers.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">User Exploration</h3>
            <p>Advanced search and filtering to browse and connect with professionals based on skills, ratings, and availability.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Connection System</h3>
            <p>Streamlined process for users to connect with professionals for their listed skills and services.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Rating & Review System</h3>
            <p>Comprehensive feedback system with user ratings and reviews for quality assurance and trust-building.</p>
          </div>
        </div>

        <h2 className="ss-subtitle">Platform Features</h2>
        <div className="platform-features">
          <div className="platform-feature-section">
            <h3 className="platform-feature-title">For Skill Providers</h3>
            <ul className="platform-feature-list">
              <li>Create detailed service profiles with skills and expertise</li>
              <li>Upload portfolio images and showcase previous work</li>
              <li>Set availability and response time expectations</li>
              <li>Receive and manage service requests</li>
              <li>Communicate directly with potential clients</li>
              <li>Build reputation through reviews and ratings</li>
              <li>Track project history and connections</li>
              <li>Customize profile visibility and privacy settings</li>
            </ul>
          </div>
          
          <div className="platform-feature-section">
            <h3 className="platform-feature-title">For Skill Seekers</h3>
            <ul className="platform-feature-list">
              <li>Browse professionals by skills and categories</li>
              <li>Filter by ratings, expertise, and availability</li>
              <li>Post detailed project requirements</li>
              <li>Receive proposals from qualified professionals</li>
              <li>Compare offers and professional profiles</li>
              <li>Connect with professionals for collaboration</li>
              <li>Rate and review completed services</li>
              <li>Save favorite professionals for future projects</li>
            </ul>
          </div>
        </div>

        <h2 className="ss-subtitle">Tech Stack</h2>
        <div className="tech-stack">
          <div className="tech-section">
            <h3 className="tech-title">Frontend</h3>
            <ul className="tech-list">
              <li>React.js</li>
              <li>React Router for navigation</li>
              <li>Context API for state management</li>
              <li>CSS3 with modern styling</li>
              <li>React Icons</li>
              <li>React Toastify for notifications</li>
              <li>AOS (Animate On Scroll) for animations</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3 className="tech-title">Backend</h3>
            <ul className="tech-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL Database</li>
              <li>JWT Authentication</li>
              <li>Bcrypt for password hashing</li>
              <li>Multer for file uploads</li>
              <li>CORS enabled</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3 className="tech-title">Additional Tools</h3>
            <ul className="tech-list">
              <li>Git for version control</li>
              <li>Postman for API testing</li>
              <li>Cloudinary for image storage</li>
              <li>Nodemailer for email notifications</li>
              <li>Bcrypt for password hashing</li>
              <li>CORS for cross-origin requests</li>
            </ul>
          </div>
        </div>

        <h2 className="ss-subtitle">Security & Quality</h2>
        <div className="security-features">
          <div className="security-item">
            <h4>Secure Authentication</h4>
            <p>JWT-based authentication with encrypted password storage and secure session management</p>
          </div>
          <div className="security-item">
            <h4>Data Protection</h4>
            <p>Secure data transmission and storage with proper encryption and access controls</p>
          </div>
          <div className="security-item">
            <h4>Quality Assurance</h4>
            <p>Comprehensive rating system, review verification, and community moderation mechanisms</p>
          </div>
        </div>

        <p className="ss-paragraph">
          This project demonstrates a comprehensive understanding of full-stack web development, including 
          secure authentication, robust data management, a dynamic skill marketplace, and user-friendly interfaces. 
          It highlights my ability to build scalable and interactive platforms that facilitate real-world connections 
          and professional networking, showcasing expertise in creating platforms that connect service providers 
          with clients in a secure and efficient manner.
        </p>
      </div>
    </div>
  );
};

export default Skillshare; 
