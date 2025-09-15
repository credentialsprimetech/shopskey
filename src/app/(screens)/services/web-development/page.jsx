"use client";
import BrandSection from "@/components/brandSection/BrandSection";
import FaqSection from "@/components/faqSection/FaqSection";
import HeroBannner2 from "@/components/heroBanner/HeroBannner2";
import IndustriesSlider from "@/components/industriesSlider/IndustriesSlider";
import Portfolio from "@/components/portfolio/Portfolio";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import React from "react";
const paragraphs = [
  "Our experienced web developers transform your vision into a high-performing online presence. We go beyond coding to understand your brand, audience, and business goals, ensuring every website we create is purpose-driven and impactful.",
  "From sleek corporate sites to complex web applications, we focus on delivering solutions that are visually engaging, user-friendly, and technically sound. Every project is built with performance, security, and scalability in mind, allowing your business to grow without limitations.",
  "As a trusted UK web development agency, we combine creativity with technical expertise to ensure measurable results and long-term digital success.",
];
const WebDevelopment = () => {
  return (
    <>
      <HeroBannner2 />
      <BrandSection
        heading="Hire Web Developers Who Deliver Results"
        imageSrc="/images/web-dev-image.png"
        altText="All Logos"
        paragraphs={paragraphs}
      />
      <Portfolio
        title="See Our"
        highlightText="Web Development"
        description="Shopskey’s project highlights our commitment to delivering custom web design services. This combines innovation principles, ensuring optimal performance and client satisfaction."
        images={[
          {
            src: "/images/webdev-port1.jpg",
            alt: "webdev-port1",
          },
          {
            src: "/images/webdev-port2.jpg",
            alt: "webdev-port2",
          },
          {
            src: "/images/webdev-port3.jpg",
            alt: "webdev-port3",
          },
          {
            src: "/images/webdev-port4.jpg",
            alt: "webdev-port4",
          },
          {
            src: "/images/webdev-port5.jpg",
            alt: "webdev-port5",
          },
          {
            src: "/images/webdev-port6.jpg",
            alt: "webdev-port6",
          },
          {
            src: "/images/webdev-port7.jpg",
            alt: "webdev-port7",
          },
          {
            src: "/images/webdev-port8.jpg",
            alt: "webdev-port8",
          },
          {
            src: "/images/webdev-port9.jpg",
            alt: "webdev-port9",
          },
          {
            src: "/images/webdev-port10.jpg",
            alt: "webdev-port10",
          },
        ]}
      />
      <IndustriesSlider
        industries={[
          {
            image: "/images/ecommerce.webp",
            title: "E-commerce & Retail",
          },
          {
            image: "/images/portfolio.webp",
            title: "Hospitality & Tourism",
          },
          {
            image: "/images/corporate.webp",
            title: "Real Estate",
          },
          {
            image: "/images/blog.webp",
            title: "Education & E-Learning",
          },
          {
            image: "/images/custom-web.webp",
            title: "Healthcare",
          },
          {
            image: "/images/responsive.webp",
            title: "Responsive Websites",
          },
        ]}
      />
          <ReviewsSection />
            <FaqSection />
    </>
  );
};

export default WebDevelopment;
