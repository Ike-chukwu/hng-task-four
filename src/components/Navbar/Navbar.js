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
          to="https://docs.google.com/document/d/1F0Ybhr80A5r3w98qknt7rZF79IBHpzmC/edit?usp=sharing&ouid=112989704845539397418&rtpof=true&sd=true"
          style={{ textDecoration: "none", color: "unset" }}
          onClick={() => setNavbarActive(false)}
        >
          <span className="link">CV</span>
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
