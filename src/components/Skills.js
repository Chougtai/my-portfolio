import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({ width: `${level}%`, transition: { duration: 1 } }),
  };

  const SkillCategory = ({ title, icon: Icon, list }) => (
    <motion.div className="skill-category" variants={itemVariants}>
      <div className="category-header">
        <Icon size={24} />
        <h3>{title}</h3>
      </div>
      <div className="skills-list">
        {list.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-progress">
              <motion.div
                className="skill-progress-bar"
                variants={progressVariants}
                custom={skill.level}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="skills">
      <div className="section">
        <div className="container">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 className="section-title" variants={itemVariants}>Skills</motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Technologies I use to build responsive and modern interfaces
            </motion.p>
            <div className="skills-container">
              <SkillCategory title="Frontend Development" icon={Code} list={skills.frontend} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 