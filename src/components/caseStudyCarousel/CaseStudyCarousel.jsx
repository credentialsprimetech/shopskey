"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://clientproject.site/tech/assets/img/Real-World-Results-with-AI-Driven-Solutions.jpg",
    title: "Real-World Results with",
    highlight: "AI-Driven Solutions",
    desc: "See how our AI-powered strategies helped clients streamline operations, boost productivity, and gain a competitive edge across industries.",
    button: "Explore Our Case Studies",
  },
  {
    image: "https://clientproject.site/tech/assets/img/Ensure-Data-Quality.jpg",
    title: "Automate Your",
    highlight: "Data Flow",
    desc: "Unlock seamless data movement between platforms and apps with intelligent ETL pipelines, tracking the entire data journey in real time.",
    button: "See How",
  },
  {
    image: "https://clientproject.site/tech/assets/img/Automate-Your-Data-Flow.jpg",
    title: "Ensure",
    highlight: "Data Quality",
    desc: "Our MLOps-driven pipeline performs automated checks, validation, and enhances accuracy for production-grade machine learning.",
    button: "Explore Our Case Studies",
  },
];

export default function SlideCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slide-box">
      <div className="carouselbox-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h3>
                {slide.title} <span className="highlight">{slide.highlight}</span>
              </h3>
              <p>{slide.desc}</p>
              <button className="cta-btn">{slide.button}</button>
            </div>
          </div>
        ))}

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
