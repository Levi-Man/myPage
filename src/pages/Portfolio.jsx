import React from 'react';
import ProjectComponent from '../components/ProjectComponent';
import '../components/style/Portfolio.css'

import project1Image from '/Wonderwall.png'; 
import project2Image from '/JATE.png';
import project3Image from '/passwordGenerator.png';
import project4Image from '/employeeManager.png';
import project5Image from '/camelDailyOrganizer.png';
import project6Image from '/scheduler.png';
import project7Image from '/bikeMe.png';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects-container">
        <ProjectComponent
          title="Wonderwall"
          imageSrc={project1Image}
          link="https://salty-lake-79772-1b4cdf7bf6b9.herokuapp.com/" linkGit="https://github.com/Levi-Man/Wonderwall"
        />
        <ProjectComponent
          title="BikeME"
          imageSrc={project7Image}
          link="https://bikeme.onrender.com/" linkGit="https://github.com/Levi-Man/bikeME"
        />
        <ProjectComponent
          title="JATE"
          imageSrc={project2Image}
          link="https://ilm-jate.onrender.com/" linkGit="https://github.com/Levi-Man/JATE"
        />
        <ProjectComponent
          title="Password Generator"
          imageSrc={project3Image} linkGit="https://github.com/Levi-Man/passwordGenerator"
          link="https://levi-man.github.io/passwordGenerator/"
        />
        <ProjectComponent
          title="Employee Manager"
          imageSrc={project4Image} linkGit="https://github.com/Levi-Man/employee_manager"
          link="https://github.com/Levi-Man/employee_manager"
        />
        <ProjectComponent
          title="Camel Daily Organizer"
          imageSrc={project5Image} linkGit="https://github.com/Levi-Man/camel_daily_organizer"
          link="https://levi-man.github.io/camel_daily_organizer/"
        />
        <ProjectComponent
          title="Scheduler"
          imageSrc={project6Image} linkGit="https://github.com/Levi-Man/Scheduler"
          link="https://levi-man.github.io/Scheduler/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
