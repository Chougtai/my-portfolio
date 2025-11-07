import React from 'react';

const Contact = () => {
  return (
    <div className="section container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <a href="mailto:rukhsarchougtai@gmail.com" className="contact-card">
          <span className="contact-label">Email</span>
          <span className="contact-value">rukhsarchougtai@gmail.com</span>
        </a>
        <a href="tel:+923491211266" className="contact-card">
          <span className="contact-label">Phone</span>
          <span className="contact-value">0349-1211266</span>
        </a>
      </div>
    </div>
  );
};

export default Contact; 