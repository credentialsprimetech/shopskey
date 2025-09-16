"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IndustriesSlider.css"; // custom hover styles

const IndustriesSlider = ({
  title = "Industries We Serve",
  description = "Are you searching for a reputable custom website design company near you? Look no further! Our team specializes in creating bespoke websites for your unique business needs.",
  industries = [],
}) => {
  return (
    <section className="logo-types py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 text-center">
            <h3 className="fw-bold">
              <span style={{ color: "#FC501B", textTransform: "capitalize" }}>
                {title}
              </span>
            </h3>
            <p className="text-dark mt-3">{description}</p>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="mySwiper mt-4 py-5 huz-sider-industries"
        >
          {industries.map((industry, idx) => (
            <SwiperSlide key={idx}>
              <div className="typebox card text-center border-red">
                <div className="box-img mx-auto mb-3 rounded">
                  <Image
                    src={industry.image}
                    alt={industry.alt || industry.title}
                    width={120}
                    height={120}
                    className="rounded img-fluid"
                     priority
                  />
                </div>
                <div className="content">
                  <h4 className="title-text">{industry.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IndustriesSlider;
