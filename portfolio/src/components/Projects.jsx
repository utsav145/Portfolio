import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlightedProjects = [
    {
      name: "Bug Tracking System",
      description: "Developed a full-stack role-based web app (React + Spring Boot) to manage bug reports, project assignments, and resolution workflows for Admins, Testers, and Developers. Features include JWT authentication, role-based dashboards, filtering/sorting, and dynamic bug lifecycle tracking.",
       // External live demo link
      githubLink: "https://github.com/utsav145/Bug_tracker_System", // GitHub link
      detailPagePath: "/projects/bug-tracking-system" // Internal detail page path
    },
    {
      name: "SkillSharers - Skill Sharing Platform",
      description: "SkillSharers is a modern web application that connects learners and professionals across the globe to share knowledge and grow together. The platform facilitates peer-to-peer learning, mentorship, and skill development through an intuitive and user-friendly interface.",
      
      githubLink: "https://github.com/utsav145/Skill-Sharing-Platform",
      detailPagePath: "/projects/skillsharers"
    },
    {
      name: "Dream Logs",
      description: "A social platform where users can share their dreams, explore others' experiences, and connect over common themes. Features include friend requests, comment system, blocking mechanism, privacy controls, and admin moderation for a safe community environment.",
      
      githubLink: "https://github.com/utsav145/dream-logs",
      detailPagePath: "/projects/dream-logs"
    }
  ];

  const otherProjects = [
    {
      name: "PAN Card Tampering Detection Application",
      description: "Developed a Streamlit application to detect tampering in PAN card images, enabling users to verify the authenticity of documents by comparing uploaded images with stored originals. Implemented image processing techniques using OpenCV and scikit-image, employing Structural Similarity Index (SSIM) and ORB feature matching to assess image integrity and detect potential tampering. Designed and managed a SQLite database to securely store original PAN card images along with associated metadata, ensuring efficient retrieval and storage operations.",
      liveLink: "https://nekuomrkn9narwrhoshaqz.streamlit.app/",
      githubLink: "https://github.com/utsav145/Pan_tampering" // Placeholder GitHub link, please update if you have one
    },
    {
      name: "Visualization of Polynomial Arithmetic",
      description: "Developed an interactive tool for students to learn polynomial operations (addition, subtraction, and multiplication) using animated and graphical representations. Implemented dynamic animations to enhance conceptual understanding, replacing traditional graph-based visualizations for better engagement. Included learning material to provide theoretical knowledge alongside interactive practice.",
      liveLink: "https://malharvb.github.io/poly-math/",
      githubLink: "https://github.com/utsav145/poly_math" // Placeholder GitHub link, please update if you have one
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      {project.detailPagePath ? (
        <Link to={project.detailPagePath} className="project-card-link-overlay">
          <div className="project-content">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links" onClick={(e) => e.preventDefault()}>
              {project.liveLink && project.liveLink !== '#' && !project.liveLink.startsWith('/') && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-live" onClick={(e) => e.stopPropagation()}>
                  Live Demo
                </a>
              )}
              {project.githubLink && project.githubLink !== '#' && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-github" onClick={(e) => e.stopPropagation()}>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className="project-content">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.liveLink && project.liveLink !== '#' && !project.liveLink.startsWith('/') && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-live">
                Live Demo
              </a>
            )}
            {project.githubLink && project.githubLink !== '#' && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-github">
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className={`projects-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {highlightedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="projects-section-divider">
          <span>Other Projects</span>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
