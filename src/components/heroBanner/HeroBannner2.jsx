"use client";

import React from "react";
import FormComponent from "../contactForms/FormComponent";
import "./HeroBannner2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";

const HeroBanner2 = ({
  title = "Leading Web Development Company",
  description = "We build high-performing websites that work seamlessly across all devices. As a trusted web development agency, we create sites that captivate your audience and deliver measurable results.",
  showForm = true,
  bgClass = "web-developmentb",
}) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // ["service", "web-design-services"]

  // Breadcrumb links generate
  const breadcrumb = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "); // web-design-services -> Web design services
    return { href, label };
  });

  return (
    <section className={`hero-section services ${bgClass}`}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            {/* Breadcrumb */}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              {breadcrumb.map((item, i) => (
                <li
                  key={i}
                  className={`breadcrumb-item ${
                    i === breadcrumb.length - 1 ? "active" : ""
                  }`}
                  aria-current={
                    i === breadcrumb.length - 1 ? "page" : undefined
                  }
                >
                  {i === breadcrumb.length - 1 ? (
                    item.label
                  ) : (
                   <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ol>

            <div className="section-title huz-section-title">
              <h1>{title}</h1>
              <p>{description}</p>

              {/* Logos slider */}
              <div className="brand-area py-10">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={5}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                  }}
                >
                  {[
                    { src: "/images/bringadsicon.png", alt: "brings-ads" },
                    {
                      src: "/images/Googlepartnericon.png",
                      alt: "google-partner",
                    },
                    { src: "/images/Inc5000.png", alt: "Inc-5000" },
                    { src: "/images/Clutchicon.png", alt: "Clutch-icon" },
                    { src: "/images/Meta.png", alt: "meta-business-partner" },
                    { src: "/images/Trustpiolateicon.png", alt: "trustpilot" },
                    {
                      src: "/images/gooogle-analytics.png",
                      alt: "google-analytics",
                    },
                  ].map((logo, idx) => (
                    <SwiperSlide key={idx}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={150}
                        height={80}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {showForm && (
            <div className="col-md-5 d-flex justify-content-end align-items-ends">
              <FormComponent />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
