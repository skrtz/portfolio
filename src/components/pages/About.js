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
        frendly & responsive web applications. Outside of VS Code however I am either making music or
        finding new ways to destroy my kitchen. For general inquiries please feel free to reach out to me!
      </p>

    </div>
  );
}
