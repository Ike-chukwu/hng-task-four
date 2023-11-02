import React from "react";
import "./ProjectContent.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import arch from "../../images/arch.jpg";
import audio from "../../images/audio.jpg";
import country from "../../images/country.jpg";
import kanban from "../../images/kanban.jpg";
import musica from "../../images/musica.jpg";
import { Link } from "react-router-dom";

const ProjectContent = () => {
  return (
    <section className="project-container">
      <div className="top-content">
        <h1 className="project-heading">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="project-briefing">
          I've worked on a variety of projects over the past year and I'm proud
          of the progress I've made so far. Many of these projects are
          open-source and available for others to explore and contribute to. If
          you're interested in any of the projects I've worked on, please feel
          free to check out the code and suggest any improvements or
          enhancements you might have in mind. Collaborating with others is a
          great way to learn and grow, and I'm always open to new ideas and
          feedback.
        </p>
        <div className="projects">
          <ProjectCard
            imgSrc={kanban}
            link="https://kanban-app-one-phi.vercel.app/"
            title="kanban task management app"
            brief="A task management app designed to help individuals or teams organize, track, and prioritize tasks. It serves as a centralized platform to manage various tasks and assignments, making it easier to collaborate."
            stack="React,Redux,Scss"
          />
          <ProjectCard
            imgSrc={musica}
            link="https://musica-red.vercel.app/"
            title="Musica"
            brief="A music application that is integrated with the Spotify API that allows users play, pause, adjust volume, skip tracks, build your curated collection effortlessly and access your favorite tunes."
            stack="React,Scss"
          />
          <ProjectCard
            imgSrc={audio}
            link="https://audiophile-fe.vercel.app/"
            title="audiophile ecommerce website"
            brief="Fully functional ecommerce website where a range of premium audio gadgets, from headphones to speakers is displayed for sale. It is integrated with Stripe for secure online transactions."
            stack="React,Css"
          />
          <ProjectCard
            imgSrc={arch}
            link="https://arch-website.vercel.app/"
            title="arch architectural website"
            brief="This elegant React-powered website for our architectural firm showcases our commitment to innovative design. The website captivates with a scrolling project gallery and highlights recent accolades."
            stack="React,Css"
          />
          <ProjectCard
            imgSrc={country}
            link="https://rest-countries-api-ike-chukwu.vercel.app/"
            title="rest countries"
            brief="Experience the Worldly Data Hub, website harnessing real-time country information from a comprehensive API. Navigate the world with ease, discovering detailed facts, statistics, and insights about any country across the globe."
            stack="Html,Css and Javascript"
          />
        </div>
      </div>
      <p className="footer">
        Want to see more works?{" "}
        <Link>
          <em className="link">Click here</em>
        </Link>
      </p>
    </section>
  );
};

export default ProjectContent;
