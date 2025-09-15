"use client";
import React from "react";
import HeroBannner2 from "@/components/heroBanner/HeroBannner2";
import BrandSection from "@/components/brandSection/BrandSection";
import Portfolio from "@/components/portfolio/Portfolio";
import IndustriesSlider from "@/components/industriesSlider/IndustriesSlider";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import FaqSection from "@/components/faqSection/FaqSection";
const paragraphs = [
  "Shopskey, our UK-based WordPress web developers, combine technical expertise with creative vision to deliver websites that make an impact. We don't just build websites, we create digital platforms that reflect your brand identity, engage your audience, and drive conversions.",
  "Every project begins with understanding your unique business needs, goals, and target market. From custom theme design and advanced plugin integration to speed optimisation and mobile responsiveness, we handle every detail with precision. Our commitment to security, performance, and scalability ensures your website supports long-term growth. Whether you need a business site, blog, or e-commerce store, we bring your vision to life.",
];

const WordpressWebDevelopment = () => {
  return (
    <>
      <HeroBannner2
        title="Hire a WordPress Web Development Company"
        description="We create bespoke websites designed to match your brand identity, business goals, and audience needs. As a trusted custom web development agency, we deliver user-friendly, scalable, and SEO-optimised solutions that drive measurable results."
      />
      <BrandSection
        heading="Hire WordPress Web Developers Who Deliver Results"
        imageSrc="/images/wordpress-image.png"
        altText="All Logos"
        paragraphs={paragraphs}
      />
      <Portfolio
        title="Our"
        highlightText="WordPress Web Development"
        description="Shopskey’s project highlights our commitment to delivering custom web design services. This combines innovation principles, ensuring optimal performance and client satisfaction."
        images={[
          {
            src: "/images/wordweb-port1.jpg",
            alt: "webdev-port1",
          },
          {
            src: "/images/wordweb-port2.jpg",
            alt: "webdev-port2",
          },
          {
            src: "/images/wordweb-port3.jpg",
            alt: "webdev-port3",
          },
          {
            src: "/images/wordweb-port4.jpg",
            alt: "webdev-port4",
          },
          {
            src: "/images/wordweb-port5.jpg",
            alt: "webdev-port5",
          },
          {
            src: "/images/wordweb-port6.jpg",
            alt: "webdev-port6",
          },
          {
            src: "/images/wordweb-port7.jpg",
            alt: "webdev-port7",
          },
          {
            src: "/images/wordweb-port8.jpg",
            alt: "webdev-port8",
          },
          {
            src: "/images/wordweb-port9.jpg",
            alt: "webdev-port9",
          },
          {
            src: "/images/wordweb-port10.jpg",
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

export default WordpressWebDevelopment;
