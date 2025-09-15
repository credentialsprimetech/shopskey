"use client";
import React from "react";
import HeroBannner2 from "@/components/heroBanner/HeroBannner2";
import BrandSection from "@/components/brandSection/BrandSection";
import Portfolio from "@/components/portfolio/Portfolio";
import IndustriesSlider from "@/components/industriesSlider/IndustriesSlider";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import FaqSection from "@/components/faqSection/FaqSection";
const paragraphs = [
  "Shopskey specializes in creating eCommerce websites that not only look good but also drive real sales. Our approach combines visually engaging designs, user-friendly navigation, and conversion-focused layouts to keep visitors engaged and ready to buy. We integrate secure payment gateways, fast-loading pages, and mobile responsiveness to ensure your store delivers a seamless shopping experience on any device.",
  "With strategic product placement, optimized checkout processes, and built-in SEO features, we help you attract more traffic and turn browsers into loyal customers. Whether you're launching a new store or upgrading an existing one, we make sure your online shop works for you.",
];

const EcommerceWebDevelopment = () => {
  return (
    <>
      <HeroBannner2
        title="ECommerce Web Development That Boosts Sales"
        description="We design and develop powerful, user-friendly ECommerce websites tailored to your brand and audience. From design to checkout, we ensure your online store delivers a seamless shopping experience and maximizes conversions."
      />
      <BrandSection
        heading="Building Online Stores That Convert"
        imageSrc="/images/ecommerce-image.png"
        altText="All Logos"
        paragraphs={paragraphs}
      />
      <Portfolio
        title="Custom Solutions for Every "
        highlightText="ECommerce"
        description="Shopskey’s project highlights our commitment to delivering custom web design services. This combines innovation principles, ensuring optimal performance and client satisfaction."
        images={[
          {
            src: "/images/ecomweb-port1.jpg",
            alt: "webdev-port1",
          },
          {
            src: "/images/ecomweb-port2.jpg",
            alt: "webdev-port2",
          },
          {
            src: "/images/ecomweb-port3.jpg",
            alt: "webdev-port3",
          },
          {
            src: "/images/ecomweb-port4.jpg",
            alt: "webdev-port4",
          },
          {
            src: "/images/ecomweb-port5.jpg",
            alt: "webdev-port5",
          },
          {
            src: "/images/ecomweb-port6.jpg",
            alt: "webdev-port6",
          },
          {
            src: "/images/ecomweb-port7.jpg",
            alt: "webdev-port7",
          },
          {
            src: "/images/ecomweb-port8.jpg",
            alt: "webdev-port8",
          },
          {
            src: "/images/ecomweb-port9.jpg",
            alt: "webdev-port9",
          },
          {
            src: "/images/ecomweb-port10.jpg",
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

export default EcommerceWebDevelopment;
