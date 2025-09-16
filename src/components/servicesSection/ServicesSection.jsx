"use client";

import React from "react";
import Image from "next/image";

const ServicesSection = ({ heading, description, services }) => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>{heading}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-inner">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                priority
                className="card-image"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services-section {
          padding: 60px 20px;
          background: #f8f8f8;
          text-align: center;
        }

        .services-header h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .description {
          font-size: 1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card-inner {
          position: relative;
        }

        .card-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
           {
            /* background: rgba(0, 0, 0, 0.7); */
          }
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .service-card:hover .overlay {
          opacity: 1;
        }

        .overlay-content {
          max-width: 90%;
        }

        .overlay-content h3 {
          margin-bottom: 10px;
          font-size: 1.5rem;
        }

        .overlay-content p {
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
