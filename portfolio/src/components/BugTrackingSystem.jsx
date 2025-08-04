import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BugTrackingSystem.css';

const BugTrackingSystem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={`bug-tracking-system-page ${isVisible ? 'is-visible' : ''}`}>
      <div className="bts-container">
        <Link to="/" className="back-button">Back to Projects</Link>
        <h1 className="bts-title">Bug & Task Tracking Application</h1>

        <h2 className="bts-subtitle">Overview</h2>
        <p className="bts-paragraph">
          The Bug & Task Tracking Application offers a comprehensive suite of features designed to streamline software project management for teams of all sizes. It provides role-based dashboards for admins, developers, and testers, ensuring that each user sees only the information and actions relevant to their responsibilities. The system supports a full bug lifecycle, including creation, assignment, progress tracking, resolution, and closure, with detailed logging of every status change, comment, and image upload. Developers and testers can reassign bugs as needed, and the application automatically flags and highlights breached bugs that exceed resolution time limits. Task management is equally robust, allowing developers to create tasks, admins to assign them to testers, and testers to close tasks or report bugs directly from tasks. The platform features secure image handling, modern UI/UX with dynamic filtering and visual indicators, and automated email notifications for all critical events, ensuring that all stakeholders are kept informed in real time. With strong authentication, role-based access control, and a responsive design, the application delivers a seamless and secure experience for managing bugs and tasks throughout the software development lifecycle.
        </p>

        <h2 className="bts-subtitle">Role-Based Dashboards</h2>
        <div className="role-cards-container">
          {/* Admin Card */}
          <div className="role-card">
            <img 
              src="/images/admin.png" 
              alt="Admin Dashboard" 
              className="role-card-image clickable-image" 
              onClick={() => handleImageClick("/images/admin.png")}
            />
            <h3 className="role-card-title">Admin</h3>
            <ul className="role-card-list">
              <li>First admin can only create other admins.</li>
              <li>Other admins can create developers and testers, but not other admins.</li>
              <li>Admins can only see the projects and bugs created for those projects.</li>
              <li>Projects can have multiple developers and testers.</li>
              <li>Once a ticket is in 'In Progress' and 'Assigned' state, an Admin cannot reassign the bug unless the developer changes the state back to 'Assigned'.</li>
              <li>Can assign tasks created by developers to testers.</li>
              <li>Access to comprehensive logs and breaching system monitoring.</li>
            </ul>
          </div>

          {/* Tester Card */}
          <div className="role-card">
            <img 
              src="/images/tester.png" 
              alt="Tester Dashboard" 
              className="role-card-image clickable-image" 
              onClick={() => handleImageClick("/images/tester.png")}
            />
            <h3 className="role-card-title">Tester</h3>
            <ul className="role-card-list">
              <li>Testers can only create bugs for their assigned projects.</li>
              <li>A Tester can have multiple projects assigned to them.</li>
              <li>Can reassign bugs to other developers in the same project group.</li>
              <li>Can close tasks assigned by admins or report bugs directly from tasks.</li>
              <li>Can upload images and add comments to bugs and tasks.</li>
              <li>Access to task management and bug lifecycle tracking.</li>
            </ul>
          </div>

          {/* Developer Card */}
          <div className="role-card">
            <img 
              src="/images/dev.png" 
              alt="Developer Dashboard" 
              className="role-card-image clickable-image" 
              onClick={() => handleImageClick("/images/dev.png")}
            />
            <h3 className="role-card-title">Developer</h3>
            <ul className="role-card-list">
              <li>Developers can solve bugs only for their assigned projects.</li>
              <li>A Developer can have multiple projects assigned to them.</li>
              <li>Can create tasks and manage their lifecycle.</li>
              <li>Can reassign bugs to other developers in the same project group.</li>
              <li>Can upload images and add detailed comments to bugs and tasks.</li>
              <li>Access to breaching system alerts and resolution time tracking.</li>
            </ul>
          </div>
        </div>

        <h2 className="bts-subtitle">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Bug Lifecycle Management</h3>
            <p>Complete bug lifecycle from creation to closure with status tracking, assignment, and resolution workflows.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Task Management</h3>
            <p>Comprehensive task creation, assignment, and tracking system integrated with bug reporting.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Image Upload & Handling</h3>
            <p>Secure image upload functionality for bugs and tasks with proper storage and retrieval.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Breaching System</h3>
            <p>Automatic detection and highlighting of bugs that exceed resolution time limits with visual indicators.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Comprehensive Logging</h3>
            <p>Detailed logs of all status changes, comments, assignments, and image uploads for complete audit trails.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Reassignment System</h3>
            <p>Flexible bug and task reassignment capabilities for testers and developers within project groups.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Email Notifications</h3>
            <p>Automated email notifications for all critical events to keep stakeholders informed in real-time.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Dynamic Filtering</h3>
            <p>Advanced filtering and sorting capabilities with visual indicators for efficient project management.</p>
          </div>
        </div>

        <h2 className="bts-subtitle">Tech Stack</h2>
        <div className="tech-stack">
          <div className="tech-section">
            <h3 className="tech-title">Frontend</h3>
            <ul className="tech-list">
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>JWT Authentication</li>
              <li>Modern UI/UX Design</li>
              <li>Responsive Layout</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3 className="tech-title">Backend</h3>
            <ul className="tech-list">
              <li>Spring Boot</li>
              <li>MySQL Database</li>
              <li>JWT Security</li>
              <li>Email Service Integration</li>
              <li>File Upload Handling</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3 className="tech-title">Features</h3>
            <ul className="tech-list">
              <li>Role-Based Access Control</li>
              <li>Real-time Notifications</li>
              <li>Image Processing</li>
              <li>Audit Logging</li>
              <li>Breaching Detection</li>
            </ul>
          </div>
        </div>

        <p className="bts-paragraph">
          This comprehensive bug and task tracking system demonstrates advanced full-stack development capabilities, 
          including complex role-based workflows, real-time notifications, secure file handling, and sophisticated 
          project management features. The application showcases expertise in building enterprise-grade solutions 
          that streamline software development processes and enhance team collaboration.
        </p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged view" className="enlarged-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BugTrackingSystem; 
