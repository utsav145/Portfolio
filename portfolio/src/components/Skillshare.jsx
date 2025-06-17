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
          SkillSharers is an innovative web application designed to connect individuals seeking specific skills with professionals offering their expertise. It functions as a marketplace where users can share their skills, offer services, and also find and hire skilled individuals for various tasks and projects.
        </p>

        <h2 className="ss-subtitle">Features</h2>
        <ul className="ss-list">
          <li><strong>User Authentication:</strong> Secure login and registration system</li>
          <li><strong>Profile Management:</strong> Customizable user profiles showcasing skills, experience, and service offerings with pricing information</li>
          <li><strong>Skill Marketplace:</strong> A platform for professionals to offer their skills and for users to find and hire talent</li>
          <li><strong>Direct Messaging:</strong> Users can communicate directly to discuss projects and services.</li>
          <li><strong>Skill Request System:</strong> Users can post requests for specific skills, and professionals can respond with offers.</li>
          <li><strong>User Exploration:</strong> Browse and connect with other users based on their skills, services, and interests.</li>
          <li><strong>Hiring Functionality:</strong> Users can directly hire professionals for their listed skills and services.</li>
          <li><strong>Rating and Review System:</strong> User ratings and reviews for quality assurance and trust-building.</li>
          <li><strong>Admin Dashboard:</strong> Comprehensive admin panel for platform management and moderation.</li>
          <li><strong>Responsive Design:</strong> Modern UI that works seamlessly across all devices.</li>
          <li><strong>Dynamic Profile Customization:</strong> Users can easily customize and update their profile information and service offerings.</li>
          <li><strong>Image Upload:</strong> Supports image uploads for profile pictures and service portfolios.</li>
        </ul>

        <h2 className="ss-subtitle">Tech Stack</h2>
        <h3 className="ss-sub-heading">Frontend</h3>
        <ul className="ss-list">
          <li>React.js</li>
          <li>React Router for navigation</li>
          <li>Context API for state management</li>
          <li>CSS3 with modern styling</li>
          <li>React Icons</li>
          <li>React Toastify for notifications</li>
          <li>AOS (Animate On Scroll) for animations</li>
        </ul>

        <h3 className="ss-sub-heading">Backend</h3>
        <ul className="ss-list">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL Database</li>
          <li>JWT Authentication</li>
          <li>Bcrypt for password hashing</li>
          <li>Multer for file uploads</li>
          <li>CORS enabled</li>
        </ul>

        <p className="ss-paragraph">
          This project demonstrates a comprehensive understanding of full-stack web development, including secure authentication, robust data management, a dynamic skill marketplace, and user-friendly interfaces. It highlights my ability to build scalable and interactive platforms that facilitate real-world connections and transactions.
        </p>
      </div>
    </div>
  );
};

export default Skillshare; 
