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
        <h1 className="ss-title">SkillSharers - Skill Sharing Platform</h1>

        <h2 className="ss-subtitle">Overview</h2>
        <p className="ss-paragraph">
          SkillSharers is a modern web application that connects learners and professionals across the globe to share knowledge and grow together. The platform facilitates peer-to-peer learning, mentorship, and skill development through an intuitive and user-friendly interface.
        </p>

        <h2 className="ss-subtitle">Features</h2>
        <ul className="ss-list">
          <li><strong>User Authentication:</strong> Secure login and registration system</li>
          <li><strong>Profile Management:</strong> Customizable user profiles with skills, experience, and pricing information</li>
          <li><strong>Skill Sharing:</strong> Platform for sharing expertise and learning from others</li>
          <li><strong>Community Building:</strong> Connect with like-minded professionals and learners</li>
          <li><strong>Flexible Learning:</strong> Learn and teach at your own pace</li>
          <li><strong>Rating System:</strong> User ratings and reviews for quality assurance</li>
          <li><strong>Admin Dashboard:</strong> Comprehensive admin panel for platform management</li>
          <li><strong>Responsive Design:</strong> Modern UI that works across all devices</li>
          <li><strong>Direct Messaging:</strong> Users can message each other directly.</li>
          <li><strong>Skill Request System:</strong> Users can send and receive skill-sharing requests.</li>
          <li><strong>User Exploration:</strong> Browse and connect with other users based on skills and interests.</li>
          <li><strong>Hiring Functionality:</strong> Users can hire other professionals for their skills.</li>
          <li><strong>Dynamic Profile Customization:</strong> Users can customize and update their profile information.</li>
          <li><strong>Image Upload:</strong> Supports image uploads for profile pictures and other content.</li>
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
          This project demonstrates a comprehensive understanding of full-stack web development, including secure authentication, robust data management, and user-friendly interfaces. It highlights my ability to build scalable and interactive platforms.
        </p>
      </div>
    </div>
  );
};

export default Skillshare; 