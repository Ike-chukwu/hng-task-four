import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./HeroSection.css";
import pic from "../../images/profile.jpg";
import { Link } from "react-router-dom";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import { gsap } from "gsap";

const HeroSection = () => {
  let container = useRef(null);
  let image = useRef(null);
  let leftText = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".hero-section .right-edge:after");

  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "unset" } }).to(imageReveal, 1.4, {
      width: "0%",
      ease: Power2.easeInOut,
    });
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.to(container, 0, { css: { visibility: "unset" } })
        .to(imageReveal, 1, { width: "0%", ease: Power2.easeInOut })
        .from(leftText, 1, { x: "-70", opacity: 0 });
    });

    return () => ctx.revert();
  });

  return (
    <div className="hero-section-parent" ref={(el) => (container = el)}>
      <section className="hero-section">
        <div className="left-side" ref={(el) => (leftText = el)}>
          <p className="title">
            Hello,my name is Ik.I'm a{" "}
            <em className="colored">front-end developer</em>
          </p>
          <p className="details">
            I am a intermediate-level front-end developer and my primary focus
            is on creating dynamic and interactive user interfaces.In addition,
            I have a keen eye for design and enjoy creating visually appealing
            and user friendly we experiences.I am committed to delivering clean,
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
          <img ref={(el) => (image = el)} src={pic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
