"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const animations = [
  "fade-up",
  "zoom-in",
  "flip-left",
  "flip-right",
  "fade-down",
  "zoom-out",
  "fade-left",
  "fade-right",
];

const PortfolioGrid = ({ header, subheader, description, images = [] }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="plogodesign1-wrapper">
      {/* Header */}
      <div className="plogodesign1-header" data-aos="fade-up">
        <h2>{header}</h2>
        <h3>
          <span>{subheader}</span>
        </h3>
        <p>{description}</p>
      </div>

      {/* Grid */}
      <div className="row g-4 justify-content-center gridsimple container mx-auto mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
            data-aos={animations[index % animations.length]} // 🔥 different animations
            data-aos-delay={index * 100}
          >
            <a
              href={img.src}
              className="plogocard"
              onClick={(e) => {
                e.preventDefault();
                setSelectedImg(img.src);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt || `Portfolio Image ${index + 1}`}
                width={300}
                height={220}
                className="img-fluid rounded"
                 priority
              />
            </a>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      {selectedImg && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.85)" }}
          tabIndex="-1"
          onClick={() => setSelectedImg(null)}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-transparent border-0 shadow-none">
              <div className="modal-body text-center p-0">
                <Image
                  src={selectedImg}
                  alt="Expanded image"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                   priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;
