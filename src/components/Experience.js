import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Calendar, Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="experience">
      <div className="section">
        <div className="container">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 className="section-title" variants={itemVariants}>Work Experience</motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              My professional journey and the companies I've worked with
            </motion.p>

            <div className="timeline">
              {experience.map((exp, index) => (
                <motion.div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} variants={itemVariants}>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="company-info">
                        <h3 className="position">{exp.position}</h3>
                        <div className="company-details">
                          <div className="company-name"><Building size={16} /><span>{exp.company}</span></div>
                          <div className="company-location"><MapPin size={16} /><span>{exp.location}</span></div>
                          <div className="company-duration"><Calendar size={16} /><span>{exp.duration}</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-body">
                      <p className="description">{exp.description}</p>
                      {exp.achievements?.length > 0 && (
                        <div className="achievements">
                          <h4><Award size={18} /> Key Achievements</h4>
                          <ul>
                            {exp.achievements.map((a, i) => (<li key={i}>{a}</li>))}
                          </ul>
                        </div>
                      )}
                      {exp.technologies?.length > 0 && (
                        <div className="technologies">
                          <h4>Technologies Used</h4>
                          <div className="tech-tags">
                            {exp.technologies.map((t, i) => (<span key={i} className="tech-tag">{t}</span>))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 