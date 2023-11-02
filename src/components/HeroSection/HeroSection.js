import React, { useEffect, useRef} from "react";
import "./HeroSection.css";
import pic from "../../images/profile.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section-parent">
      <section className="hero-section">
        <div className="left-side">
          <p className="title">
            Hello,my name is Ik.I'm a{" "}
            <em className="colored">front-end developer</em>
          </p>
          <p className="details">
            I am an intermediate-level front-end developer and my primary focus
            is on creating dynamic and interactive user interfaces.In addition,
            I have a keen eye for design and enjoy creating visually appealing
            and user friendly experiences.I am committed to delivering clean,
            efficient and maintainable code that adheres to best practices and
            industry standards.I am excited about the prospect of working with a
            team that shares my passion for excellence in web development
          </p>

          <div className="click-btn">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "unset" }}
            >
              Check projects <i className="fas fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="right-edge">
          <img src={pic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
