import React from 'react';
import Resume from '../../assets/resume.pdf';
import { FiThumbsUp } from 'react-icons/fi';

export default function Contact() {
  return (
    <a href={Resume} download="kurtz-resume">
    <div className="contact">
      <h1>Contact Me</h1>
      <a href={Resume} download="kurtz-resume">
        Click to view resume and contact info
      </a>
      <FiThumbsUp size={30}/>
    </div>
  </a>

  );
}
