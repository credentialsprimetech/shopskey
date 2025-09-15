'use client';

import React from 'react';
import Image from 'next/image';

const LogoCarousel = ({
  logos = [],
  logoWidth = 150,
  height = 80,
  gap = 32,
  speedSec = 20,
  bgColor = '#efefef',
  className = '',
}) => {
  const repeatedLogos = [...logos, ...logos]; // Duplicate for infinite scroll

  return (
    <div
      className={`carousel-container ${className}`}
      style={{
        overflow: 'hidden',
        width: '100%',
        backgroundColor: bgColor,
        height: `${height}px`,
      }}
    >
      <div
        className="carousel-track"
        style={{
          display: 'flex',
          animation: `scroll ${speedSec}s linear infinite`,
          gap: `${gap}px`,
        }}
      >
        {repeatedLogos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            width={logoWidth}
            height={height}
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .carousel-track img {
            width: ${logoWidth * 0.7}px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
