import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DreamLogs.css';

const DreamLogs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`dream-logs-page ${isVisible ? 'is-visible' : ''}`}>
      <div className="dl-container">
        <Link to="/" className="back-button">Back to Projects</Link>
        <h1 className="dl-title">Dream Logs</h1>

        <h2 className="dl-subtitle">Overview</h2>
        <p className="dl-paragraph">
          Dream Logs is a social platform where users can share their dreams, explore others' experiences, 
          and connect over common themes. Users can post their dreams as public (visible to everyone) or 
          private (visible only to approved followers). Each user has a profile section where they can 
          upload a profile picture and write a bio, creating a personalized space for their dream journey.
        </p>

        <h2 className="dl-subtitle">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Dream Sharing</h3>
            <p>Users can share their dreams with detailed descriptions, tags, and themes for better discovery.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Privacy Controls</h3>
            <p>Toggle dream visibility between public and private, with private dreams visible only to approved followers.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Friend Requests</h3>
            <p>Send, accept, or reject friend requests to build connections and gain access to private dream content.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Comment System</h3>
            <p>Engage in discussions by commenting on public or accessible private dreams to share insights.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Blocking Mechanism</h3>
            <p>Block unwanted users to prevent interactions and maintain a comfortable sharing environment.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Admin Moderation</h3>
            <p>Admins can access all dreams and moderate content to maintain a safe and respectful community.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">User Profiles</h3>
            <p>Personalized profiles with profile pictures, bios, and dream history for better user experience.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Dream Discovery</h3>
            <p>Explore dreams by themes, tags, and user connections to find meaningful content and experiences.</p>
          </div>
        </div>

        <h2 className="dl-subtitle">Platform Features</h2>
        <div className="platform-features">
          <div className="platform-feature-section">
            <h3 className="platform-feature-title">User Features</h3>
            <ul className="platform-feature-list">
              <li>Dream posting with public/private visibility</li>
              <li>Profile customization with pictures and bios</li>
              <li>Friend request management system</li>
              <li>Comment and engage with other dreams</li>
              <li>Block unwanted users</li>
              <li>Dream discovery and exploration</li>
              <li>Privacy controls for content</li>
              <li>Personal dream history tracking</li>
            </ul>
          </div>
          
          <div className="platform-feature-section">
            <h3 className="platform-feature-title">Admin Features</h3>
            <ul className="platform-feature-list">
              <li>Access to all dreams (public and private)</li>
              <li>Content moderation capabilities</li>
              <li>Delete inappropriate comments or posts</li>
              <li>User management and oversight</li>
              <li>Community safety monitoring</li>
              <li>Platform policy enforcement</li>
              <li>Analytics and reporting tools</li>
              <li>Emergency content removal</li>
            </ul>
          </div>
        </div>

        <h2 className="dl-subtitle">Tech Stack</h2>
        <div className="tech-stack">
          <div className="tech-section">
            <h3 className="tech-title">Frontend</h3>
            <ul className="tech-list">
              <li>React.js</li>
              <li>Redux for state management</li>
              <li>React Router for navigation</li>
              <li>Axios for API calls</li>
              <li>CSS3 with modern styling</li>
              <li>Responsive design</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3 className="tech-title">Backend</h3>
            <ul className="tech-list">
              <li>.NET Core</li>
              <li>ASP.NET Core Web API</li>
              <li>Entity Framework Core</li>
              <li>SQL Server Database</li>
              <li>JWT Authentication</li>
              <li>SignalR for real-time features</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3 className="tech-title">Additional Tools</h3>
            <ul className="tech-list">
              <li>Git for version control</li>
              <li>Postman for API testing</li>
              <li>Azure Blob Storage for images</li>
              <li>SendGrid for email notifications</li>
              <li>BCrypt for password hashing</li>
              <li>CORS for cross-origin requests</li>
            </ul>
          </div>
        </div>

        <h2 className="dl-subtitle">Privacy & Security</h2>
        <div className="security-features">
          <div className="security-item">
            <h4>Privacy Controls</h4>
            <p>Granular control over dream visibility with public/private toggles and follower-only access</p>
          </div>
          <div className="security-item">
            <h4>User Protection</h4>
            <p>Blocking mechanism and friend request system to prevent unwanted interactions</p>
          </div>
          <div className="security-item">
            <h4>Content Moderation</h4>
            <p>Admin oversight and content filtering to maintain a safe and respectful community</p>
          </div>
        </div>

        <p className="dl-paragraph">
          Dream Logs demonstrates expertise in building social platforms with advanced privacy controls, 
          user interaction systems, and community moderation features. The project showcases skills in 
          user experience design, real-time communication, content management, and creating safe online 
          spaces for personal expression and connection.
        </p>
      </div>
    </div>
  );
};

export default DreamLogs; 