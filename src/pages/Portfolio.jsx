import React from 'react';
import ProjectComponent from '../components/ProjectComponent';
import '../components/style/Portfolio.css'

import project1Image from '../../public/Wonderwall.png'; 
import project2Image from '../../public/JATE.png';
import project3Image from '../../public/passwordGenerator.png';
import project4Image from '../../public/employeeManager.png';
import project5Image from '../../public/camelDailyOrganizer.png';
import project6Image from '../../public/scheduler.png';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects-container">
        <ProjectComponent
          title="Wonderwall"
          imageSrc={project1Image}
          link="https://salty-lake-79772-1b4cdf7bf6b9.herokuapp.com/"
        />
        <ProjectComponent
          title="JATE"
          imageSrc={project2Image}
          link="https://ilm-jate.onrender.com/"
        />
        <ProjectComponent
          title="Password Generator"
          imageSrc={project3Image}
          link="https://levi-man.github.io/passwordGenerator/"
        />
        <ProjectComponent
          title="Employee Manager"
          imageSrc={project4Image}
          link="https://github.com/Levi-Man/employee_manager"
        />
        <ProjectComponent
          title="Camel Daily Organizer"
          imageSrc={project5Image}
          link="https://levi-man.github.io/camel_daily_organizer/"
        />
        <ProjectComponent
          title="Scheduler"
          imageSrc={project6Image}
          link="https://levi-man.github.io/Scheduler/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
