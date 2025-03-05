import React from 'react';
import './Aboutus.css';

const OurTeam = () => {
  return (
    <div className="our-team">
      <h1>Our Team</h1>

      <div className="team-info">
        <div>
          <h2>Dr. Rajasekar N</h2>
          <p>Ranked among top 2% scientist globally</p>
        </div>

        <div>
          <h2>40 members, across 4 domains</h2>
          <ul className="domain-list">
            <li><span className="domain-icon"></span> Mechanical Domain</li>
            <li><span className="domain-icon"></span> Electrical Domain</li>
            <li><span className="domain-icon"></span> CS Domain</li>
            <li><span className="domain-icon"></span> Marketing & Finance Domain</li>
          </ul>
        </div>
      </div>

      <div className="contact">
        <h2>Contact Us</h2>
        <p>Mobile: +91 9952362301</p>
        <p>Email: <a href="mailto:nrajasekar@vit.ac.in">nrajasekar@vit.ac.in</a></p>
      </div>
    </div>
  );
};

export default OurTeam;
