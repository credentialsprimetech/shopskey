"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Portfolio.css";

const Portfolio = ({
  title = "See Our",
  highlightText = "Portfolio",
  description = "Our project highlights innovation, creativity, and performance.",
  images = [],
}) => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="section-title text-center">
              <h2>
                {title}{" "}
                <span style={{ color: "#FC501B", textTransform: "capitalize" }}>
                  {highlightText}
                </span>{" "}
                Work in Action
              </h2>
              <p style={{ color: "black" }}>{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500, // 2.5 seconds delay
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="web-slider-Portfolio"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <a
              className="popupimg"
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={img.src}
                alt={img.alt || "portfolio-img"}
                width={400}
                height={250}
                className="w-100 h-auto"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
