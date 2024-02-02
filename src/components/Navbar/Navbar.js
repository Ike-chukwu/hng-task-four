import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNavbar, setNavbarActive] = useState(false);
  return (
    <nav>
      <div className="left-side">
        <span className="name">Ik</span>
        <span className="line">|</span>
        <span className="name">Front-end Developer</span>
      </div>
      <div className={activeNavbar ? "right-side active" : "right-side"}>
        <Link
          to="/"
          onClick={() => setNavbarActive(false)}
          style={{ textDecoration: "none", color: "unset" }}
        >
          <span className="link">Home</span>
        </Link>
        <Link
          onClick={() => setNavbarActive(false)}
          to="/projects"
          style={{ textDecoration: "none", color: "unset" }}
        >
          <span className="link">Projects</span>
        </Link>
        <Link
          onClick={() => setNavbarActive(false)}
          to="https://github.com/Ike-chukwu"
          style={{ textDecoration: "none", color: "unset" }}
        >
          <span className="link">Github</span>
        </Link>
        <Link
          to="https://drive.google.com/file/d/13jFWwNwuw4hNQUw1x1D5p2gwaKEC3pNQ/view?usp=sharing"
          style={{ textDecoration: "none", color: "unset" }}
          onClick={() => setNavbarActive(false)}
        >
          <span className="link">Resume</span>
        </Link>
      </div>
      <i
        className={activeNavbar ? "fas fa-times" : "fas fa-bars"}
        onClick={() => setNavbarActive(!activeNavbar)}
      ></i>
    </nav>
  );
};

export default Navbar;
