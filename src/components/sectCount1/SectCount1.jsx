"use client";

import { useEffect, useRef, useState } from "react";
import "./SectCount1.css";
export default function SectCount1() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    team: 0,
    clients: 0,
  });

  const targets = {
    projects: 1000,
    team: 150,
    clients: 600,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1500;
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(Math.round((targets.projects / steps) * step), targets.projects),
        team: Math.min(Math.round((targets.team / steps) * step), targets.team),
        clients: Math.min(Math.round((targets.clients / steps) * step), targets.clients),
      });

      if (step === steps) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <section className="sectcount1" ref={sectionRef}>
      <div className="sectcount1-container">

        {/* Left Content */}
        <div className="sectcount1-left">
          <h3 className="sectcount1-heading">Building Your Winning Future!</h3>
          <p className="sectcount1-description">
            We are a full-cycle web and app development partner, turning ideas into scalable digital solutions.
            With a focus on innovation and user experience, we help businesses solve complex problems and accelerate growth.
          </p>

          <div className="sectcount1-stats">
            <div className="sectcount1-stat">
              <div className="sectcount1-counter" data-target="1000">
                {counts.projects}+<span></span>
              </div>
              <p className="sectcount1-subtext">Project Successfully Delivered</p>
            </div>

            <div className="sectcount1-stat">
              <div className="sectcount1-counter" data-target="150">
                {counts.team}+<span></span>
              </div>
              <p className="sectcount1-subtext">Skilled Team Members</p>
            </div>

            <div className="sectcount1-stat">
              <div className="sectcount1-counter" data-target="600">
                {counts.clients}+<span></span>
              </div>
              <p className="sectcount1-subtext">Global Clients Served</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="sectcount1-right">
          <div className="sectcount1-image-wrapper">
            <img
              src="https://shopskey.com/images/Count-Section.png"
              alt="Company Illustration"
              className="sectcount1-image"
            />
            <div className="sectcount1-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
