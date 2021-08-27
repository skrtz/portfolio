import React from 'react';
import Resume from '../../assets/resume_2021.pdf'

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>stephenjkurtz@gmail.com</p>
      <a href={Resume} download="kurtz-resume">
        Click to view my resume
      </a>
    </div>
  );
}
