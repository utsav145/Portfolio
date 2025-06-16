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
        <h1 className="bts-title">Bug Tracking System</h1>

        <h2 className="bts-subtitle text-center">Role-Based Dashboards</h2>
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
            </ul>
          </div>
        </div>

        <p className="bts-paragraph">
          A role-based web application designed to streamline the reporting, assignment, and resolution of software bugs. Built with a React frontend and a Spring Boot backend, the system provides separate dashboards and functionalities for Admins, Testers, and Developers.
        </p>

        <h2 className="bts-subtitle">Key Features:</h2>
        <ul className="bts-list">
          <li><strong>Role-Based Access Control:</strong>
            <ul className="bts-nested-list">
              <li>Admins can create projects, assign bugs to developers, and manage users.</li>
              <li>Testers can create bug reports for their assigned projects, view project details, and track resolution progress.</li>
              <li>Developers can view and resolve assigned bugs, update bug statuses, and write resolution notes.</li>
            </ul>
          </li>
          <li><strong>Bug Lifecycle Management:</strong>
            <ul className="bts-nested-list">
              <li>Bugs pass through various statuses: Open → Assigned → In Progress → Resolved.</li>
              <li>Developers can change statuses and provide resolutions upon fixing.</li>
            </ul>
          </li>
          <li><strong>Project Assignment Module:</strong>
            <ul className="bts-nested-list">
              <li>Admins can assign specific projects to developers and testers.</li>
              <li>Users only see bugs and project data relevant to their assignments.</li>
            </ul>
          </li>
          <li><strong>Advanced Filtering and Sorting:</strong>
            <ul className="bts-nested-list">
              <li>Bugs can be filtered by project, status, priority, and creation time (last 1 day, 7 days, or month).</li>
              <li>Bugs are organized and displayed by status using collapsible sections.</li>
            </ul>
          </li>
          <li><strong>Interactive UI Components:</strong>
            <ul className="bts-nested-list">
              <li>Searchable and sortable bug tables.</li>
              <li>Profile dropdown with logout, change password, and session info.</li>
              <li>Navigation bar with dynamic routing based on user roles.</li>
            </ul>
          </li>
          <li><strong>Authentication and Authorization:</strong>
            <ul className="bts-nested-list">
              <li>Secure JWT-based login and registration system.</li>
              <li>Admin-restricted user registration interface.</li>
            </ul>
          </li>
        </ul>

        <h2 className="bts-subtitle">Tech Stack:</h2>
        <ul className="bts-list">
          <li><strong>Frontend:</strong> React.js, Tailwind CSS, Axios, React Router</li>
          <li><strong>Backend:</strong> Spring Boot, Spring Security, JWT</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>Other Tools:</strong> Postman, Git, Maven</li>
        </ul>

        <p className="bts-paragraph">
          This project reflects my ability to design full-stack, secure, and user-role-driven applications that solve real-world software development collaboration challenges.
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