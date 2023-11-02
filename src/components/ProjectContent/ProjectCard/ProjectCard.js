import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <img src={props.imgSrc} className="project-image" alt="" />
      <h2 className="project-title">{props.title}</h2>
      <p className="project-brief">{props.brief}</p>
      <p className="project-brief">
        <span className="project-stack">Stack:</span> {props.stack}
      </p>
      <Link to={props.link} style={{ textDecoration: "none", color: "unset" }}>
        <button className="btn">visit site</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
