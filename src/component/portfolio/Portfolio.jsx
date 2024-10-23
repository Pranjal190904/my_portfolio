import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png"; 
import IMG3 from "../../assets/Edumarshal.jpeg"; 
import IMG5 from "../../assets/Cyber.jpeg"; 
import IMG7 from "../../assets/Workshala.png"; 
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Exam Portal",
      github: "https://github.com/Pranjal190904/examPortal_backend",
      demo: null,
    },
    {
      id: 2,
      image: IMG3,
      title: "Edumarshal",
      github: "https://github.com/Pranjal190904/erp_portal",
      demo: "https://edumarshal-web.vercel.app",
    },
    {
      id: 3,
      image: IMG5,
      title: "CyberSecure",
      github: "https://github.com/Pranjal190904/cybersecure",
      demo: "https://drive.google.com/file/d/1l4dXQGPwGmzfIF0Ql1YrpkgnMezmFyuq/view",
    },
    {
      id: 5,
      image: IMG7,
      title: "Workshala",
      github: "https://github.com/Pranjal190904/workShala_backend",
      demo: "https://workshala-navy.vercel.app/",
    },
  
  ];

  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
