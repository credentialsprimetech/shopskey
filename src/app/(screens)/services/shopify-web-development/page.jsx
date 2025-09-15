"use client";
import React from "react";
import HeroBannner2 from "@/components/heroBanner/HeroBannner2";
import BrandSection from "@/components/brandSection/BrandSection";
import Portfolio from "@/components/portfolio/Portfolio";
import IndustriesSlider from "@/components/industriesSlider/IndustriesSlider";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import FaqSection from "@/components/faqSection/FaqSection";
const paragraphs = [
  "Our experienced Shopify developers go beyond just building a store; they create a powerful eCommerce platform tailored to your business goals. From theme customization and product setup to app integrations and payment gateway configuration, we ensure every element is designed to maximize performance and sales.",
  "We follow Shopify best practices for speed, security, and SEO, so your store not only looks great but ranks well in search engines. Whether you're launching a brand-new store, migrating from another platform, or upgrading an existing Shopify site, our team delivers seamless, conversion-focused solutions that set your business up for long-term success.",
];

const ShopifyWebDevelopment = () => {
  return (
    <>
      <HeroBannner2
        title="Shopify Web Development Company"
        description="Build a stunning, conversion-focused Shopify store with our Shopify web development services. From custom design to seamless integrations, we help you launch and grow your online business."
      />
      <BrandSection
        heading="Hire Shopify Web Developers for Your Online Store"
        imageSrc="/images/ecommerce-image.png"
        altText="All Logos"
        paragraphs={paragraphs}
      />
      <Portfolio
        title="See Our "
        highlightText="Shopify Store Creations"
        description="Shopskey’s project highlights our commitment to delivering custom web design services. This combines innovation principles, ensuring optimal performance and client satisfaction."
        images={[
          {
            src: "/images/shopifyweb-port1.jpg",
            alt: "webdev-port1",
          },
          {
            src: "/images/shopifyweb-port2.jpg",
            alt: "webdev-port2",
          },
          {
            src: "/images/shopifyweb-port3.jpg",
            alt: "webdev-port3",
          },
          {
            src: "/images/shopifyweb-port4.jpg",
            alt: "webdev-port4",
          },
          {
            src: "/images/shopifyweb-port5.jpg",
            alt: "webdev-port5",
          },
          {
            src: "/images/shopifyweb-port6.jpg",
            alt: "webdev-port6",
          },
          {
            src: "/images/shopifyweb-port7.jpg",
            alt: "webdev-port7",
          },
          {
            src: "/images/shopifyweb-port8.jpg",
            alt: "webdev-port8",
          },
          {
            src: "/images/shopifyweb-port9.jpg",
            alt: "webdev-port9",
          },
          {
            src: "/images/shopifyweb-port10.jpg",
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

export default ShopifyWebDevelopment;
