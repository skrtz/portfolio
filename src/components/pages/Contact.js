import React from 'react';
import Resume from '../../assets/resume.pdf'

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <a href={Resume} download="kurtz-resume">
        Click to view resume and contact info
      </a>
    </div>
  );
}
