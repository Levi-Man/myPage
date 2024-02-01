import React from 'react';
import './ProjectComponent.css';

const ProjectComponent = ({ title, imageSrc, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageSrc} alt={`${title} Screenshot`} className="project-image" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectComponent;