"use client";
import React from "react";
import HeroBannner2 from "@/components/heroBanner/HeroBannner2";
import BrandSection from "@/components/brandSection/BrandSection";
import Portfolio from "@/components/portfolio/Portfolio";
import IndustriesSlider from "@/components/industriesSlider/IndustriesSlider";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import FaqSection from "@/components/faqSection/FaqSection";
const paragraphs = [
  "Shopskey, great websites start with a deep understanding of your business. Our experienced custom web developers work closely with you to identify your goals, target audience, and brand personality, ensuring every element of your site reflects your vision.",
  "We don't just focus on design, we prioritise performance, security, and scalability so your website can grow with your business. Whether you need a simple corporate site or a complex web application, our approach guarantees a solution that is visually appealing, user-friendly, and strategically built to drive measurable results for your business.",
];
const CustomWebDevelopment = () => {
  return (
    <>
      <HeroBannner2
        title="Premier Custom Web Development Company"
        description="We create bespoke websites designed to match your brand identity, business goals, and audience needs. As a trusted custom web development agency, we deliver user-friendly, scalable, and SEO-optimised solutions that drive measurable results."
      />
      <BrandSection
        heading="Hire Custom Web Developers Who Understand Your Vision"
        imageSrc="/images/homeabout-main-image.png"
        altText="All Logos"
        paragraphs={paragraphs}
      />
      <Portfolio
        title="Showcasing Our"
        highlightText="Custom Web Solutions"
        description="Shopskey’s project highlights our commitment to delivering custom web design services. This combines innovation principles, ensuring optimal performance and client satisfaction."
        images={[
          {
            src: "/images/3d-studioz.jpg",
            alt: "webdev-port1",
          },
          {
            src: "/images/affordable-cleaning-service.jpg",
            alt: "webdev-port2",
          },
          {
            src: "/images/cathywhittallartist.jpg",
            alt: "webdev-port3",
          },
          {
            src: "/images/deja-vu.jpg",
            alt: "webdev-port4",
          },
          {
            src: "/images/djaen.jpg",
            alt: "webdev-port5",
          },
          {
            src: "/images/idea.jpg",
            alt: "webdev-port6",
          },
          {
            src: "/images/itok.jpg",
            alt: "webdev-port7",
          },
          {
            src: "/images/lawn-care.jpg",
            alt: "webdev-port8",
          },
          {
            src: "/images/playkits.jpg",
            alt: "webdev-port9",
          },
          {
            src: "/images/vaya.jpg",
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

export default CustomWebDevelopment;
