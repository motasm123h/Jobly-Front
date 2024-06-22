import React from 'react';
import NavBar from "../../Component/NavBar/NavBar";
import './About.css';

export default function About() {
  return (
    <div>

<NavBar/>

<div className="about-container">
      <div className="about-content">
        <h1>Welcome to Our Company</h1>
        <p>Established in 20XX</p>
        <p>
          We are a leading provider of innovative solutions in [industry/sector]. Since our establishment in [year], we have been committed to delivering high-quality services to our clients.
        </p>
        <p>
          Our mission is to [briefly describe mission/goal]. We strive to [briefly describe objective/goal].
        </p>
      </div>
    </div>
    </div>
 
  );
}
