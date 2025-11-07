import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import './Footer.css';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="gradient-text">{personal.name}</h3>
            <p>{personal.tagline || 'Full Stack Developer passionate about creating amazing web experiences.'}</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {personal.social?.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
              )}
              {personal.social?.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              )}
              {personal.social?.twitter && (
                <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} {personal.name}. Made with <Heart size={16} className="heart" /> using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 