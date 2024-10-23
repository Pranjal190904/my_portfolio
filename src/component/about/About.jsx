import React from "react";
import "./about.css";
import Me1 from "../../assets/Pranjal.jpg"
const About = () => {
  return (
    <section id="about" style={{ "margin-top": "4rem" }}>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about-me">
          <div className="about_me-image">
            <img src={Me1} alt="" />
          </div>
        </div>
        <div className="container about_content">
          <p style={{ fontSize:"1.5rem", padding: "8px" }}>
            I am a Fullstack developer and a Programmer. Currently Persuing Bachelors of Technology in Computer Science, I specialize in building scalable backend systems. I'm passionate about creating seamless user experiences and constantly learning new technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
