import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Levi-Man" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
     
      <a href="https://www.linkedin.com/in/indra-levi-manahan-908912154/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>

      <a href="https://www.facebook.com/kumanahan/" target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Facebook
      </a>
    </footer>
  );
};

export default Footer;