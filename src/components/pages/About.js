import React from 'react';
import headshot from '../../assets/headshot.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="headshot">
        <img alt="headshot" src={headshot}></img>
      </div>
      <p >
        My name is Stephen Kurtz and I am a front-end developer from Philadelphia, PA. Along with my coding
        skills I leverage my many years of experience in the service industry and marketing by building user
        frendly & responsive web applications. I have my certificate in MERN stack web developement from 
        UPenn Coding Bootcamp and seek to continue to build my knowledge of new technologies. For general 
        inquiries please feel free to reach out to me!
      </p>

    </div>
  );
}
