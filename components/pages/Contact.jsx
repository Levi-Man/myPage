import React from 'react';
import ContactForm from '../ContactForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <div>
        <ContactForm />
      </div>
      Indra Levi Manahan<br></br>
      email: indra.levi.manahan@gmail.com<br></br>
      <a href="https://github.com/Levi-Man" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
      <br />
      <a href="https://www.linkedin.com/in/indra-levi-manahan-908912154/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
    </div>
  );
}
