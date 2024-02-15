import React from 'react';
import './style/ProjectComponent.css';

const ProjectComponent = ({ title, imageSrc, link, linkGit }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageSrc} alt={`${title} Screenshot`} className="project-image" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        Deployed Project 
      </a><br/>
      <a href={linkGit} target="_blank" rel="noopener noreferrer">
        GitHub Repo 
      </a>
    </div>
  );
};

export default ProjectComponent;